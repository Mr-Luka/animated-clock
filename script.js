function clock () {
  const now = new Date();
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500); // clear the whole rectangle, 0, 0 starting and 500 is the size of it
  ctx.translate(250, 250); // it will put 0 and 0 point right into the midle
  ctx.rotate(-Math.PI / 2) // Rotate clock -90 degrees

  // Set Default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face/border
  ctx.save(); // it will save the state everything before it
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000'; // this will be applied only in between save and restore
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke(); // when I call ctx.stroke, thats when its gonna draw the circle
  ctx.fill();
  ctx.restore();


  ctx.restore(); // restore default state
}

clock();