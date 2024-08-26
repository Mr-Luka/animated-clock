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


  ctx.restore(); // restore default state
}

clock();