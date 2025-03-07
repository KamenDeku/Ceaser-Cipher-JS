import {dictionaryMayus, dictionaryMinus, dictionaryNumbers, dictionarySpecial, moveCharacter} from "./dictionary.js" //Import the dictionaries of the characters and the function to move the characters

export function decrypt(message, key) {
    //Cut al the components of the message
    return message.split("").map((char) => {

        //Uses the mayus dictionary to encrypt the message
        if (dictionaryMayus.includes(char)) {
            //Return the number of the index of each character and add the value of the key to find the displacement in the dictionary
            return moveCharacter(char, -key, dictionaryMayus);

        //Uses the minus dictionary to encrypt the message
        } else if (dictionaryMinus.includes(char)) {
            //Return the number of the index of each character and add the value of the key to find the displacement in the dictionary
            return moveCharacter(char, -key, dictionaryMinus);

        //Uses the numbers dictionary to encrypt the message
        } else if (dictionaryNumbers.includes(char)) {
            //Return the number of the index of each character and add the value of the key to find the displacement in the dictionary
            return moveCharacter(char, -key, dictionaryNumbers);

        //Uses the other icons dictionary to encrypt the message
        } else if (dictionarySpecial.includes(char)) {
            //Return the number of the index of each character and add the value of the key to find the displacement in the dictionary
            return moveCharacter(char, -key, dictionarySpecial);
        
        //If the character doesn exist in any dictionary doesnt do anything
        } else {
            return char;
        }
    //Join all the characters to form the message
    }).join("");
}
