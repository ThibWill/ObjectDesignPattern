interface Shape
{
    length: number
    area(): number;
}

/**
 * Chaque forme gére son calcul d'aire
 */
class Square implements Shape
{
    public length: number;
    constructor (length: number)
    {
        this.length = length;
    }

    public area() {
        return this.length ** 2;
    }
}


class Circle implements Shape
{
    // Diameter
    public length: number;
    constructor (length: number)
    {
        this.length = length;
    }

    public area() {
        return Math.PI * (this.length / 2) ** 2;
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
     * Fonction générique qui marchera même si on rajoute un nouveau type de forme
     * @returns 
     */
    public sum(): number
    {
        return this.shapes
            .map((shape: Shape) => shape.area())
            .reduce((prevArea: number, nextArea: number) => {
                console.log(prevArea, nextArea)
                return prevArea + nextArea;
            });
    }

    public output(): string
    {
        return `Sum of the areas of provided shapes: ${this.sum()}`;
    }
}

/**
 * Gère le sortie du calculateur d'aire
 */
class SumCalculatorOutputter
{
    protected calculator;

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

const areaCalculator = new AreaCalculator([square, circle]);
const sumCalculatorOutputter = new SumCalculatorOutputter(areaCalculator);

console.log(sumCalculatorOutputter.JSON());

