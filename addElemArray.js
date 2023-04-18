const input = document.querySelector('.emotikon-input');
const arrayResult = document.querySelector('.span__array');

export function newElemArray() {
    let newElem = input.value
    let currentArray = arrayResult.innerHTML.split(',').concat(newElem)
    arrayResult.innerHTML = currentArray
}

