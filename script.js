const canvas = document.querySelector('#canvas');
const faceColor = document.querySelector('#face-color');
const borderColor = document.querySelector('#border-color');
const lineColor = document.querySelector('#line-color');
const largeHandColor = document.querySelector('#large-hand-color');
const secondHandColor = document.querySelector('#second-hand-color');


function clock () {
  const now = new Date();
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
  ctx.strokeStyle = borderColor.value; // this will be applied only in between save and restore
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke(); // when I call ctx.stroke, thats when its gonna draw the circle
  ctx.fill();
  ctx.restore();

  // Draw hour mark/lines
  ctx.save();
  ctx.strokeStyle = lineColor.value;
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
    ctx.strokeStyle = lineColor.value;
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

  // console.log(`${hr}:${min}:${sec}`)

  // Draw hour hand
  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0)
  ctx.stroke();
  ctx.restore();

  // Draw minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = largeHandColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0)
  ctx.stroke();
  ctx.restore();

  // Draw second hand / seconds
   ctx.save();
  ctx.rotate((sec * Math.PI / 30));
  ctx.strokeStyle = secondHandColor.value;
  ctx.fillStyle = secondHandColor.value;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0)
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore default state

  requestAnimationFrame(clock)
}

requestAnimationFrame(clock)

document.querySelector('#save-btn').addEventListener('click', ()=> {
  const dataURL = canvas.toDataURL('img/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
})