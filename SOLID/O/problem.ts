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

    public sum(): number
    {
        let sumAreas = 0;
        // A chaque nouvelle forme on doit rajouter une ligne ici
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
}

class SumCalculatorOutputter
{
    protected calculator: AreaCalculator;
    constructor(calculator: AreaCalculator)
    {
        this.calculator = calculator;
    }

    public JSON()
    {
        return {
            sum: this.calculator.sum()
        }
    }

    public TXT()
    {
        return `Sum of the areas of provided shapes: ${this.calculator.sum()}`;
    }
}

const square = new Square(2);
const circle = new Circle(3);

const areaCalculator3 = new AreaCalculator([square, circle]);
const sumCalculatorOutputter3 = new SumCalculatorOutputter(areaCalculator3);

console.log(sumCalculatorOutputter3.JSON());
