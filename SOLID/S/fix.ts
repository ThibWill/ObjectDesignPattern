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

/**
 * Toute la logique serait gérée par la classe AreaCalculator. Cela violerait le principe de responsabilité unique.
 * La classe AreaCalculator ne doit s'intéresser qu'à la somme des aires des formes fournies.
 * Il ne devrait pas se soucier de savoir si l'utilisateur veut du JSON ou du HTML.
 */
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
}

/**
 * Gère le sortie du calculateur d'aire
 */
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


const areaCalculator = new AreaCalculator([square, circle]);
const sumCalculatorOutputter = new SumCalculatorOutputter(areaCalculator);
console.log(sumCalculatorOutputter.JSON());
