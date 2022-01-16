/*
    Première étape.
    Premièrement on crée la classe abstraite qui regroupe les méthodes et les attributs communs. Ce sont ces méthodes que l'on utilisera dans les autres classes
*/
abstract class Voiture {
	public libelle: string;
	public prix: number;
	public poids: number;

    constructor(libelle: string, prix: number, poids: number) {
        this.libelle = libelle;
        this.prix = prix;
        this.poids = poids;
    }
	
	public getLibelle(): string { return this.libelle; }
	public getPrix(): number { return this.prix; }
	public getPoids(): number { return this.poids; }
	
	public toString(): string { return "Voiture : " + this.getLibelle() + ", Prix : " + this.getPrix() + ", Poids : " + this.getPoids(); }
}

/*
    Deuxieme étape
    Maintenant on crée la classe Corsa et la classe C2 qui correspondent aux classes Composant Concret. Elles héritent de la classe voiture. Dans le constructeur de ces classes on définit leurs attributs à l’aide des mutateurs de leurs classe mère.
*/
class Corsa extends Voiture {
    constructor() {
        super("Corsa", 5000, 1500);
    }	
}

class C2 extends Voiture {
    constructor() {
        super("C2", 4000, 1000);
    }		
}

/*
    Troisième étape
    A présent, on crée le Décorateur. Celui-ci possède une voiture en attribut et on choisit les méthodes que l'on a redefinir. Ici, ce sera les méthodes : getLibelle(), getPrix(), getPoids().
*/
abstract class DecorateurVoiture extends Voiture {

    protected voiture: Voiture;

    constructor(voiture: Voiture) {
        super(voiture.libelle, voiture.prix, voiture.poids);
        this.voiture = voiture;
    }
	
	public getLibelle(): string {
        return this.voiture.getLibelle();
    }
	public getPrix(): number {
        return this.voiture.getPrix()
    }
	public getPoids(): number {
        return this.voiture.getPoids();
    }
}

/*
    Quatrième étape
    On crée une classe pour chaque option que l'on souhaite aujouter. Chaque Option (ToitOuvrant, GPS, Régulateur...) doit hériter de la classe DecorateurVoiture et redéfinir ses méthodes.
*/
class ToitOuvrant extends DecorateurVoiture {
	constructor(v: Voiture) { 
        super(v);
    }
	public getLibelle(): string { return super.getLibelle() + " Toit Ouvrant "; }
	public getPrix(): number {return super.getPrix() + 2000;}
	public getPoids(): number {return super.getPoids() + 15;}	
}
class GPS extends DecorateurVoiture {
	constructor(v: Voiture) { 
        super(v);
    }
	public getLibelle(): string { return super.getLibelle() + " GPS "; }
	public getPrix(): number {return super.getPrix() + 1000;}
	public getPoids(): number {return super.getPoids() + 20;}	
}
class Regulateur extends DecorateurVoiture {
	constructor(v: Voiture) { 
        super(v);
    }
	public getLibelle(): string { return super.getLibelle() + " Regulateur "; }
	public getPrix(): number {return super.getPrix() + 200;}
	public getPoids(): number {return super.getPoids() + 1;}	
}


/*
    Cinquième étape
    Maintenant on implémente le main pour utiliser notre décorateur
*/
let v1 = new Corsa();
console.log(v1.toString());

let v2 = new C2();
v2 = new Regulateur(v2);
console.log(v2.toString());

let v3 = new Corsa();
v3 = new ToitOuvrant(v3);
v3 = new GPS(v3);
console.log(v3.toString());


    