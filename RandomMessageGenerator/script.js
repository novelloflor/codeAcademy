//Function that contains the object to be created
const phraseBuilder = (verb, adj) => {
    let obj = {
        primePhrase: 'This week is going to feel ',
        secondaryPhrase: 'And next week you are going to be doing lots of ',
        verb: verb,
        adj: adj,
        generate(){
            var phrase = `${obj.primePhrase}${adj}!. ${obj.secondaryPhrase}${verb}`
            return phrase;
        }
    }
    return obj
}

//returns verb and adjective. Takes the min number of the array and the max length and randomly gets a number to pick any verb/adjetive
const returnVerb = (min, max) => {
    var words = ['loving', 'enjoying', 'eating', 'living'];
    return words[Math.floor(Math.random() * (max - min + 1)) + min];
}

const returnAdj = (min, max) => {
    var words = ['beautiful', 'terrific', 'amazing', 'sweet'];
    return words[Math.floor(Math.random() * (max - min + 1)) + min];
}


//Generates the random phrase each time the program runs

const phraseGenerator = () => {
    const phrasing = phraseBuilder(returnVerb(0, 3), returnAdj(0, 3));
    console.log(phrasing.generate());
}
phraseGenerator();


