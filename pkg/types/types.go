package types

type Data struct {
	Inventions InventionMap
}

type InventionMap map[string]Invention

type Invention struct {
	Invention                        string
	Idea1, Idea2, Idea3, Description string
}
