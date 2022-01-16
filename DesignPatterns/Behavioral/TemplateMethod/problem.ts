class JeuDeSociété {
 
    protected type: string;
    private nombreDeJoueurs: number;

    constructor(type: string) {
        this.type = type;
    }

    partieTerminée(): boolean {
        if (this.type === "échec") {
            // logique pour savoir quand terminer la partie
            return true;
        } else if (this.type === "monopoly") {
            // logique pour savoir quand terminer la partie
            return true;
        }
        return false;
    }
  
    /* Une méthode socle : */
    jouerUnePartie(nombreDeJoueurs: number){
      this.nombreDeJoueurs = nombreDeJoueurs;
      
      if (this.type === "échec") {
          // initialiser chess
      } else if (this.type === "monopoly") {
          // initialiser monopoly
      }
      
      let j = 0;
      while (!this.partieTerminée() ){
        if (this.type === "échec") {
            // tour echec
        } else if (this.type === "monopoly") {
            // tour monopoly
        }
        j = (j + 1) % nombreDeJoueurs;
      }
      if (this.type === "échec") {
            // print vainqueur echec
      } else if (this.type === "monopoly") {
            // print vainqueur monopoly
      }
    }
}
 

const echec = new JeuDeSociété("échec");
echec.jouerUnePartie(3);


//////////////////////// Solution ? /////////////////////////

abstract class JeuDeSociété {
 
    protected nombreDeJoueurs: number;
  
    /* Une méthode socle : */
    abstract jouerUnePartie(nombreDeJoueurs: number): void;
}
 
class Monopoly extends JeuDeSociété {

    partieTerminée(): boolean {
        // logique pour savoir quand terminer la partie
        return false;
    }
  
    jouerUnePartie(nombreDeJoueurs: number){
        this.nombreDeJoueurs = nombreDeJoueurs;
        // initialiser
        let j = 0;
        while (!this.partieTerminée()){
          // tour
          j = (j + 1) % nombreDeJoueurs;
        }
        // print vainqueur echec
    } 
}
 
 
class Echecs extends JeuDeSociété {
    partieTerminée(): boolean {
        // logique pour savoir quand terminer la partie
        return false;
    }
  
    jouerUnePartie(nombreDeJoueurs: number){
        this.nombreDeJoueurs = nombreDeJoueurs;
        // initialiser
        let j = 0;
        while (!this.partieTerminée()){
          // tour
          j = (j + 1) % nombreDeJoueurs;
        }
        // print vainqueur echec
    } 
}

// Duplication de code 
 