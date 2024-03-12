const container = document.querySelector('.container');
const customiseBtn = document.querySelector('.customise');
const divs = [];
let dimensions = 16;

customiseBtn.addEventListener('click', function(){
  dimensions = parseInt(prompt("Enter a number from 1-100", 16));
});

function generateGrid(cellsPerSide){
  divs.forEach((div) => container.removeChild(div));
  divs.length = 0;

  for(let i = 0; i < cellsPerSide * cellsPerSide; i++){
    const div = document.createElement('div');
    div.setAttribute("style", `width: ${960 / cellsPerSide}px; height: ${960 / cellsPerSide}px`);
    div.classList.add('cell');
    divs.push(div);
  }

  divs.forEach((div) => {
    div.addEventListener('mouseenter', function(){
      div.classList.add('painted');
    })
    container.appendChild(div);
  });
}