interface Shape
{
    area(): number;
}

interface ThirdDimensionalShape
{
    volume(): number;
}

class Cube implements Shape, ThirdDimensionalShape
{
    public length: number;
    constructor (length: number)
    {
       this.length = length;
    }
 
    public area() {
       return (this.length ** 2) * 6;
    }

    public volume() {
        return this.length ** 3;
    }
}

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