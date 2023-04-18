import { randomEmoticon } from './randomEmoticon.js'
import { newElemArray } from './addElemArray.js';
import { newElemSet } from './addElemSet.js';

const input = document.querySelector('.emotikon-input');
const inputBtn = document.querySelector('.emotikon-btn');

input.value = randomEmoticon()

inputBtn.addEventListener('click', newElemArray)
inputBtn.addEventListener('click', newElemSet)







