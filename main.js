const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CHAR_SIZE = 6;
const TEXT = [ '0000000000---------------0000000000', '1', 'X','V','S','x','v','s'];

const textIndex = Math.floor(Math.random() / TEXT.length);
const char = TEXT[textIndex];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let angle = Math.random() * Math.PI * 2;

function animate() {
  
  angle += 0.0035;


  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let j = 0; j < 18; j++) {
    for (let i = 0; i < TEXT.length; i++) {
      for (let k = 0; k < TEXT.length; k++) {
      
      const char = TEXT[i];
      const radius = 200 + (j * 120);
      const area = 100 / ( k * 1 )//area is a new property and called in const x

      const x = centerX - Math.tan(angle + (j * 1 * Math.PI) / TEXT.length) * radius/area;
      const y = centerY + Math.cos(angle + (k * 2 * Math.PI / k) / TEXT.length) * radius;
      //in const x and const y, change i * 1 * math.pi, change i into j

      ctx.font = `${CHAR_SIZE}px monospace`;
      const charWidth = ctx.measureText(char).width;

      const scale = 1 - y / canvas.height;
      const translateX = x - centerX;
      const translateY = y - centerY;
      ctx.setTransform(scale, 0, 0, scale, centerX + translateX, centerY + translateY);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, -charWidth / 2, CHAR_SIZE / 2);
      ctx.restore();
      
      }
    }
  }

  requestAnimationFrame(animate);
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
animate();


// source control =