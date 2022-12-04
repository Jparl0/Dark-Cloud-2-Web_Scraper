package scrape

import (
	"DC2-DataScraper/pkg/types"
	"errors"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"net/http"
	"net/url"
	"strings"
)

type Scraper interface {
	Scrape(data *types.InventData) error
}

type BaseScraper struct {
	Address string
}

type PsnProfileScraper struct {
	BaseScraper
}

func NewPsnProfileScraper() *PsnProfileScraper {
	return &PsnProfileScraper{BaseScraper{Address: "https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide"}}
}

func (p *PsnProfileScraper) Scrape(data *types.InventData) error {
	u, err := url.Parse(p.Address)
	if err != nil {
		return err
	}

	if u.Host == "" {
		return errors.New("hostname (domain) cannot be blank")
	}

	if u.Scheme == "" {
		return errors.New("scheme (http://) cannot be blank")
	}

	res, err := http.Get(u.String())
	if err != nil {
		return err
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return fmt.Errorf("Unexpected status code from request: %v", res.StatusCode)
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return err
	}

	fmt.Println(doc.Text())

	findInventions(data, doc)

	return nil
}

func findInventions(data *types.InventData, doc *goquery.Document) {
	doc.Find("#3-inventions").
		Find(".section-original").
		Find("table").Find("tr").Each(func(i int, selection *goquery.Selection) {
		invention := types.Invention{}
		selection.Find("td").Each(func(i int, selection *goquery.Selection) {
			text := strings.TrimSpace(selection.Text())
			switch i {
			case 0:
				invention.Invention = text
			case 1:
				invention.Idea1 = text
			case 2:
				invention.Idea2 = text
			case 3:
				invention.Idea3 = text
			case 4:
				invention.Description = text
				data.Inventions[invention.Invention] = invention
			default:
			}
		})
	})
}

func findIdeas(data *types.IdeaData, doc *goquery.Document) {
	doc.Find("#1-ideas").
		Find(".section-original").
		Find("table").Find("tr").Each(func(i int, selection *goquery.Selection) {
		idea := types.Idea{}
		selection.Find("td").Each(func(i int, selection *goquery.Selection) {
			text := strings.TrimSpace(selection.Text())
			switch i {
			case 0:
				idea.Idea = text
			case 1:
				idea.Location = text
			case 2:
				idea.IdeaDescript = text
				data.Ideas[idea.Idea] = idea
			default:
			}
		})
	})
}
