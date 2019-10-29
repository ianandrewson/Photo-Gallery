import { renderDragon } from './util/renderDragon.js';
import htmlToDOM from './util/html-to-DOM.js';
import images from './data/images.js';

const displayArea = document.getElementById('display-area');

const filter = document.getElementById('filter');
filter.addEventListener('change', () => {
    while (displayArea.lastElementChild) {
        displayArea.lastElementChild.remove();
    }
    let filterChoice = filter.value;
    images.forEach(element => {
        if (filterChoice === 'all') {
            displayArea.appendChild(htmlToDOM(renderDragon(element)))
        } else if (element.keyword === filterChoice) {
            displayArea.appendChild(htmlToDOM(renderDragon(element)));
        }
    });
});

images.forEach(element => {
    let elementHtml = renderDragon(element);
    let dom = htmlToDOM(elementHtml);
    displayArea.appendChild(dom);
});