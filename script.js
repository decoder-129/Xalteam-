/*function showKey(val) {
  document.getElementById("output").textContent =
    `You pressed: ${val.key}`;
}*/

function keyPressed() {
  if (event.key === 'enter') {
    this.value = '';
  }
}