const canvas = document.querySelector("canvas");

// Methode pour créer les animations, cercle triangle etc...
const ctx = canvas.getContext("2d");

let posX = 100;
let posY = 0;

canvas.addEventListener("mousemove", (e) => {
  posX = e.offsetX;
  posY = e.offsetY;
  //console.log(posX, posY);
});

//function pour animer le canvas
function anim() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clean le canvas

  ctx.save();
  ctx.beginPath(); // on lui donne un chemin
  ctx.rect(posX - 175, 0, 350, 750); //on lui dessine un rectangle // -175 on avoir le pointer au milieu du rect
  //ctx.fill(); //on le remplie pour bien le visualiser
  ctx.clip(); //on créer le détourage

  ctx.drawImage(
    //on dessine notre video sur la canvas
    document.querySelector("video"),
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.restore();

  requestAnimationFrame(anim);
}
anim();
