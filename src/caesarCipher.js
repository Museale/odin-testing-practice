
export const caesarCipher = (string, n) => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'æ', 'ø', 'å'];
    const originalAlphabet = [...alphabet];
    const cipheredString = [];

    const shiftTheAlphabet = (n) => {
        const moveCharacters = originalAlphabet.slice(0, n);
        const cipherAlphabet = originalAlphabet.slice(n).concat(moveCharacters);

        return cipherAlphabet;
    };

    const findLetterPositions = (string) => {
        const stringArr = [...string];
        const indexes = [];

        stringArr.forEach(letter => {
            const toLowerCaseLetter = letter.toLowerCase();
            const pos = originalAlphabet.indexOf(toLowerCaseLetter);
            if(letter === ' ') {
                indexes.push(' ');
            }
            if(pos !== -1) {
                indexes.push(pos);
            }
            console.log(indexes)
        })
        return indexes;
    };
  

    const cipherString = (string,n) => {
        const indexes = findLetterPositions(string);
        const shiftedAlphabet = shiftTheAlphabet(n);
        
        indexes.forEach(pos => {
            cipheredString.push(shiftedAlphabet[pos]);
            if(pos === ' ') {
                cipheredString.push(' ');
            };
        })
        return cipheredString.join('');
    }

    return {
       cipheredString: cipherString(string,n)
    }
};


// find index of each letter in original alphabet - arr, map through shiftedalph and get each index 

