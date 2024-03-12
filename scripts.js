const container = document.querySelector('.container');

const div = document.createElement('div');
div.setAttribute("style", `width: ${960 / 16}px; height: ${960 / 16}px`);
div.classList.add('square');
container.appendChild(div);