// DOM
const tar = document.getElementsByTagName('main')[0].getElementsByTagName('div')[0];
const trigger = document.getElementsByClassName('js-trigger')[0].getElementsByTagName('li');
const array = Array.from(trigger);

// function
function setFontSize(element) {
    const size = element.innerHTML;
    tar.className = '';
    if(size === 's') {
        tar.classList.add('fontSmall');
    } else if(size === 'm') {
        tar.classList.add('fontMedium');
    } else {
        tar.classList.add('fontLarge');
    }
}

function clickEvent(e) { 
    e.preventDefault();
    const element = e.target;
   setFontSize(element);
}

function textResizer(el) {
    el.addEventListener('click', clickEvent);
}

// run
array.forEach(textResizer);


