const phraseBuilder = (verb, adj) => {
    let obj = {
        primePhrase: 'This week is going to feel ',
        secondaryPhrase: 'And next week you are going to be doing lots of ',
        verb: verb,
        adj: adj,
        generate(){
            phraseGenerator()
        }
    }
}

//returns verbs. Takes the min number of the array and the max length and randomly gets a number to pick any verb
const returnVerb = (min, max) => {
    var words = ['loving', 'enjoying', 'eating', 'living'];
    return words[Math.floor(Math.random() * (max - min + 1)) + min];
}

const returnAdj = (min, max) => {
    var words = ['beautiful', 'terrific', 'amazing', 'sweet'];
    return words[Math.floor(Math.random() * (max - min + 1)) + min];
}


returnAdj(0, 3)
returnVerb(0, 3)

const phraseGenerator = () => {

}

/*
primePhrase: ['sunset', 'flowers', 'sky', 'ground']
*/