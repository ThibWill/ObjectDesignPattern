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

class VolumeCalculator extends AreaCalculator
{
    constructor(shapes = [])
    {
        super(shapes);
    }

    /**
     * Somme des volumes des formes
     */
    public sum(): number[]
    {
        const summedData = 0; // Logique pour calculer le volume
        // Le type retourné n'est pas le même
        return [summedData];
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


const areaCalculator = new AreaCalculator([square, circle]);
const sumCalculatorOutputterArea = new SumCalculatorOutputter(areaCalculator);

const volumeCalculator = new VolumeCalculator([square, circle]);
const sumCalculatorOutputterVolume = new SumCalculatorOutputter(volumeCalculator);

console.log(sumCalculatorOutputterArea.JSON());
console.log(sumCalculatorOutputterVolume.JSON());

