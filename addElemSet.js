const input = document.querySelector('.emotikon-input');
const setResult = document.querySelector('.span__set');


export function newElemSet() {
    let set = new Set();
    let currentArray = setResult.innerHTML.split(',')
    for (let elem of currentArray) {
        set.add(elem)
    }
    let newElem = input.value
    set.add(newElem)
    setResult.innerHTML = Array.from(set)
}
