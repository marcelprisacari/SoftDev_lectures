// Dictionaries

const listGames = (system) => {

    let collection = {
        "Nintendo": ['Duck Hunt','The Legend of Zelda','Super Mario Bros.'],
        "Super Nintendo": ['Super Mario World','F-Zero','Star Fox'],
        Nintendo64: ['Super Mario 64','Mario Kart 64','GoldenEye 007'],
    }

    return collection[system];
}

console.log(listGames('Nintendo64'));
console.log(listGames('Nintendo'));

const stateAbbreviations = {
    alaska: 'ak',
    delaware: 'de',
    hawaii: 'hi',
    indiana: 'in',
    vermont: 'vt'
}
const acronym = {
    asap: 'as soon as possible',
    fomo: 'fear of missunderstanding',
    gif: 'graphics interchange format',
    lol: 'laugh out loud'
}
// console.log(stateAbbrivation['hawaii']);
function findIt(dict, search) {
    return dict[search];
}

let state = findIt(stateAbbreviations, 'vermont');
console.log(state);
let acro = findIt(acronym, 'gif');
console.log (acro)

// ! State Machine

let light = {
    green: ['yellow'],
    yellow: ['red'],
    red: ['green','yeild'],
    yield: ['red']
}

let currentState = 'green';

function enterState(newState) {
    // What are valid values currently available?
    let validTransition = light[currentState]; // Establish which point in our state object we want to reference.

    if (validTransition.includes(newState)) {
        // Does our key include the state our user is attempting to change it to?
        currentState = newState; //Allows our state to change
        return `The light turns ${currentState}.`;
    } else {
        console.log('Invalid state!');
        // throw(`Invalid State: ${currentState} to ${newState}`);
        return `Cannot go from ${currentState} to ${newState}. Available options are: ${validTransition.join(', ')}.`;
    }
}

let updateLightOne = enterState('yellow');
console.log(updateLightOne);
let updateLightTwo = enterState('red');
console.log(updateLightTwo);
let updateLightThree = enterState('green');
console.log(updateLightThree);
let brokenLight = enterState('red');
console.log(brokenLight);
