interface Shape
{
    area(): number;
    volume(): number;
}

class Cube implements Shape
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

    // Forcé d'implémenter volume
    public volume() {
        return 0;
    }
}