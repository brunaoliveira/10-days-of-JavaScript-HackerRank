
function reverseString(s) {
    try {
        let reversedString = (s.split('').reverse()).join('');
        console.log(reversedString);        
    } catch (error) {
        console.log(error.message);
        console.log(s); 
    }
}

