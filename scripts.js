const container = document.querySelector('.container');
const divs = [];
let dimensions = 16;

for(let i = 0; i < dimensions * dimensions; i++){
  const div = document.createElement('div');
  div.setAttribute("style", `width: ${960 / dimensions}px; height: ${960 / dimensions}px`);
  div.classList.add('square');
  divs.push(div);
}

divs.forEach((div) => container.appendChild(div));