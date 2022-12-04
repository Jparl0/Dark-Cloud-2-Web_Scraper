package types

type InventData struct {
	Inventions InventionMap
}

type InventionMap map[string]Invention

type Invention struct {
	Invention                        string
	Idea1, Idea2, Idea3, Description string
}

// later change Invention's "Description" to "InventDescript" to match Idea
type IdeaData struct {
	Ideas IdeaMap
}

type IdeaMap map[string]Idea

type Idea struct {
	Idea                   string
	Location, IdeaDescript string
}
