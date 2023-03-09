
class Idea:
    def __init__(self, name, location, idea_descript) -> None:
        self.name = name
        self.location = location
        self.idea_descript = idea_descript

    def __str__(self):
        return (f"{self.name}{self.location}{self.idea_descript}")

class Invention:
    def __init__(self, name, idea1, idea2, idea3, inv_descript) -> None:
        self.name = name
        self.idea1 = idea1
        self.idea2 = idea2
        self.idea3 = idea3
        self.inv_descript = inv_descript

    def __str__(self):
        return (f"{self.name}{self.idea1}{self.idea2}{self.idea3}{self.inv_descript}")



