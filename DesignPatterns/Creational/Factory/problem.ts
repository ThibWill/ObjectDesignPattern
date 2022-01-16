interface Chair {

}

class SummerChair implements Chair {

}

class DeskChair implements Chair {

}

class Party {
    chair: Chair;
    constructor(typeChair: string) {
        if (typeChair === "summer") {
            this.chair = new SummerChair();
        } else if (typeChair === "desk") {
            this.chair = new DeskChair();
        } else if (blabla) {
            // ...
        }
    }   
}