
abstract class JeuDeSociété{
 
    protected nombreDeJoueurs: number;
    protected abstract initialiserLeJeu(): void;
    abstract faireJouer(joueur: number): void;
    abstract partieTerminée(): boolean;
    abstract proclamerLeVainqueur(): void;
  
    /* Une méthode socle : */
    jouerUnePartie(nombreDeJoueurs: number){
      this.nombreDeJoueurs = nombreDeJoueurs;
      this.initialiserLeJeu();
      let j = 0;
      while (!this.partieTerminée() ){
        this.faireJouer(j);
        j = (j + 1) % nombreDeJoueurs;
      }
      this.proclamerLeVainqueur();
    }
}
 
 
class Monopoly extends JeuDeSociété {
  
    /* Implémentation concrète des méthodes nécessaires */
  
    void initialiserLeJeu(){
      // ...
    }
  
    void faireJouer(int joueur){
      // ...
    }
  
    boolean partieTerminée(){
      // ...
    }
  
    void proclamerLeVainqueur(){
      // ...
    }
   
    /* Déclaration des composants spécifiques au jeu du Monopoly */
  
    // ...
  
}
 
 
class Echecs extends JeuDeSociété {
  
    /* Implémentation concrète des méthodes nécessaires */
  
    void initialiserLeJeu(){
      // ...
    }
  
    void faireJouer(int joueur){
      // ...
    }
  
    boolean partieTerminée(){
      // ...
    }
  
    void proclamerLeVainqueur(){
      // ...
    }
   
    /* Déclaration des composants spécifiques au jeu d'échecs */
  
    // ...
  
}
 