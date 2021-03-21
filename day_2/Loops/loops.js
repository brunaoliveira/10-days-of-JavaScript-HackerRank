
function vowelsAndConsonants(s) {
    let consonants = [];
    
    s.split("").forEach(char => {
        if ((/^[aeiou]$/i).test(char)) {
            console.log(char);
        }  else {
            consonants.push(char);
        }
    });

    consonants.forEach(char => console.log(char));    
}
