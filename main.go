package main

import (
	"DC2-DataScraper/pkg/scrape"
	"DC2-DataScraper/pkg/types"
	"fmt"
	"log"
	"sync"
)

func main() {
	scrapers := make([]scrape.Scraper, 0)

	scrapers = append(scrapers, scrape.NewPsnProfileScraper())

	data := new(types.InventData)
	data.Inventions = make(map[string]types.Invention, 0)

	wg := new(sync.WaitGroup)

	for _, s := range scrapers {
		wg.Add(1)
		go func(scraper scrape.Scraper) {
			if err := scraper.Scrape(data); err != nil {
				log.Fatal(err)
			}
			wg.Done()
		}(s)
	}

	wg.Wait()

	for _, invention := range data.Inventions {
		// print it
		fmt.Printf("Invention [%v] Idea1 [%v] Idea2 [%v] Idea3 [%v] Description [%v]\n",
			invention.Invention, invention.Idea1, invention.Idea2, invention.Idea3, invention.Description)
	}

}
