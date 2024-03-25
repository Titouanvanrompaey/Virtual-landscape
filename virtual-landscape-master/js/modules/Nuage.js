
import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un nuage
 */
export class Nuage extends AbstractForm {
  // Ajout des valeurs par défaut pour éviter les erreurs avec les arguments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save();

    // Définition des styles pour cette forme
    ctx.fillStyle = this.fillColor;
    ctx.lineWidth = this.strokeWidth;

    // Dessin du nuage
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2, false);
    ctx.arc(this.x + this.width / 2 + this.width / 4, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2, false);
    ctx.arc(this.x + this.width / 2 - this.width / 4, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2, false);
    ctx.arc(this.x + this.width / 2, this.y + this.height / 2 - this.height / 4, this.width / 2, 0, Math.PI * 2, false);
    ctx.closePath();

    // Dessin des formes à l'écran
    ctx.fill();
   

    // Restaure les styles précédents pour éviter la pollution des couleurs
    ctx.restore();
  }

  /**
   * Crée un tableau d'objets de type Nuage
   * @return {[Nuage,...]}
   */
  static buildForms() {
    const myNuage = new Nuage(250, 70, 100, 100, 'white', 'gray', 2, true);
    let max = ~~(Math.random() * 5) + 5 // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Nuage(
          ~~(Math.random() * myNuage.x + 50),
          ~~(Math.random() * myNuage.y),
          ~~(Math.random() * myNuage.width + 10),
          ~~(Math.random() * myNuage.height + 5),
          myNuage.fillColor,
          myNuage.strokeColor,
          0,
          i % 2 === 0 // pesanteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Nuage
    return forms
  }
}
