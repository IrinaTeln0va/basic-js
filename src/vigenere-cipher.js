class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirectMachine = isDirect;
		this.A_CHAR_CODE = 65;
		this.Z_CHAR_CODE = 90;
		this.ALPHABET_LENGTH = 26;
	}

    encrypt(str, key) {
		this.validateArgs(str, key);
        str = str.toUpperCase();
        
        const keyString = this.getRepeatedKey(str, key);

        let result = '';
        for (let i = 0; i < str.length; i++) {

          if (!this.isAlphabetLetter(str[i])) {
          	result += str[i];
          } else {
          	const addedShift = this.getAlphabetIndex(str[i]) + this.getShift(keyString[i]);
          	result += this.correctOverstepAlphabet(addedShift);
          }
        }

        return this.reverseIfNesessary(result);
    }

    decrypt(strToDecode, key) {
    	this.validateArgs(strToDecode, key);
        strToDecode = strToDecode.toUpperCase();

        const keyString = this.getRepeatedKey(strToDecode, key);

        let result = '';

        for (let i = 0; i < strToDecode.length; i++) {

            if (!this.isAlphabetLetter(strToDecode[i])) {
            	result += strToDecode[i];
            } else {
            	const addedShift = this.getAlphabetIndex(strToDecode[i]) - this.getShift(keyString[i]);
          		result += this.correctOverstepAlphabet(addedShift);
            }
        }
            
        return this.reverseIfNesessary(result);
    }

    validateArgs(str, key) {
    	if (typeof(str) == 'undefined' || typeof(key) == 'undefined') {
    		throw new Error();
    	}
    }

    getRepeatedKey(str, key) {
    	let repeatedKey = '';
        for (let i = 0, j = 0; i < str.length; i++, j++) {
           if (str[i] !== ' ') {
              repeatedKey += key[j%key.length];
           } else {
               repeatedKey += ' ';
               j--; 
           }
        }

        return repeatedKey.toUpperCase();
    }

    isAlphabetLetter(letter) {
    	if (letter.charCodeAt() > this.Z_CHAR_CODE || letter.charCodeAt() < this.A_CHAR_CODE) {
    		return false;
    	}
    	return true;
    }

    getShift(letter) {
    	const letterCharCode = letter.charCodeAt();
    	
    	return letterCharCode - this.A_CHAR_CODE;
    }

    getAlphabetIndex(letter) {
    	return letter.charCodeAt() - this.A_CHAR_CODE;
    }

    correctOverstepAlphabet(letterIndex) {
    	const resultLetterIndex = (this.ALPHABET_LENGTH + (letterIndex % this.ALPHABET_LENGTH)) % this.ALPHABET_LENGTH;
    	return String.fromCharCode(resultLetterIndex + this.A_CHAR_CODE);
    }

    reverseIfNesessary(result) {
    	if (this.isDirectMachine) {
        	return result;
        } else {
        	return result.split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;