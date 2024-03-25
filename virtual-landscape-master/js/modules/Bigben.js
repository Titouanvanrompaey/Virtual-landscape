import { AbstractForm } from './AbstractForm.js';
export class Bigben extends AbstractForm {
    constructor(
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesenteur = false,
        ordreConstruction = 100
      ) {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
      }
      draw(ctx) {
        ctx.save()
    
        // set the styles for this shape
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth
        // Fond blanc
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Tour de l'Horloge
        ctx.fillStyle = "#d9d9d9";
        ctx.fillRect(150, 50, 300, 600);
        ctx.fillRect(125, 50, 25, 100);
        ctx.fillRect(425, 50, 25, 100);

        // Horloge
        ctx.fillStyle = "#000000";
        ctx.fillRect(200, 100, 200, 200);
        ctx.beginPath();
        ctx.arc(300, 200, 90, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(300, 200, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();

        // Cloche
        ctx.fillStyle = "#d9d9d9";
        ctx.beginPath();
        ctx.moveTo(300, 275);
        ctx.lineTo(250, 375);
        ctx.lineTo(350, 375);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(300, 375, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "#d9d9d9";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(300, 375, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();

        // Aiguilles de l'Horloge
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(300, 125);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(250, 200);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(350, 200);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.stroke();

        // Texte "Big Ben"
        ctx.font = "48px sans-serif";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText("Big Ben", 300, 700);
    }
    /**
   * get array of forms
   * @return {[Bigben,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myBigben = new Bigben(250, 70, 100, 100, 'gold', '', 2, true)
    let max = ~~(Math.random() * 5) + 5 // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Bigben(
          ~~(Math.random() * 3 * myBigben.x + 50),
          ~~(Math.random() * myBigben.y),
          ~~(Math.random() * 3 * myBigben.width + 10),
          ~~(Math.random() * myBigben.height + 10),
          myBigben.fillColor,
          myBigben.strokeColor,
          '',
          i % 2 === 0 // pesenteur une fois sur 2
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }
}