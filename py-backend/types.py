

class Invention:
    def __init__(self, name, idea1, idea2, idea3, descript) -> None:
        self.name = name
        self.idea1 = idea1
        self.idea2 = idea2
        self.idea3 = idea3
        self.descript = descript

    def __str__(self):
        return f"{self.name}{self.idea1}{self.idea2}{self.idea3}{self.descript}"


class Idea:
    def __init__(self, name, location, ideaDescript) -> None:
        self.name = name
        self.location = location
        self.ideaDescript = ideaDescript

    def __str__(self):
        return f"{self.name}{self.location}{self.ideaDescript}"

invent1 = Invention("")