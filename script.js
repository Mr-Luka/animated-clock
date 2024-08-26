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

  // Draw hour mark/lines
  ctx.save();
  for( let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();

  }
  ctx.restore();

  // Draw minute marks/lines
    ctx.save();
    ctx.lineWidth = 4;
  for( let i = 0; i < 60; i++) {
    if(i % 5 !== 0) { // so it doesnt draw on the same line as an hour line
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();      
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get current time
  const hr = now.getHours() % 12; // giving us 12 hours instead of 24
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hr}:${min}:${sec}`)

  // Draw hour hand
  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = '#800000';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0)
  ctx.stroke();
  ctx.restore();

  ctx.restore(); // restore default state
}

clock();