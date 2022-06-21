const para = document.querySelector('p');
para.addEventListener('click', updateName);

// Named Function
function updateName(){
 const name = prompt('Enter a new name');
 para.textContent = `Player 1: ${name}`;
}

// Anonymous Function
document.getElementById("mydiv").onmouseover = function()
{
  this.style.backgroundColor = "red";
}
