interface Shape 
{
    length: number
}

class Square implements Shape
{
    public length: number;
    constructor (length: number)
    {
        this.length = length;
    }
}


class Circle implements Shape
{
    // Diamètre
    public length: number;
    constructor (length: number)
    {
        this.length = length;
    }
}

class AreaCalculator
{
    protected shapes;
    constructor(shapes: Shape[])
    {
        this.shapes = shapes;
    }

    /**
     * Calcule la somme des aires passées
     * @returns sumAreas
     */
    public sum(): number
    {
        let sumAreas = 0;
        this.shapes.forEach((shape: Shape) => {
            if (shape.constructor.name === 'Square') {
                sumAreas += shape.length ** 2;
            } else if (shape.constructor.name === 'Circle') {
                sumAreas += Math.PI * (shape.length / 2) ** 2;
            } else {
                sumAreas += 0;
            }
        })
        return sumAreas;
    }

    // La classe s'occupe de deux jobs à la fois: calculer la somme et l'afficher
    public output(): string
    {
        return `Sum of the areas of provided shapes: ${this.sum()}`;
    }
}

const square = new Square(2);
const circle = new Circle(3);

const areaCalculator = new AreaCalculator([square, circle]);
console.log(areaCalculator.output());
