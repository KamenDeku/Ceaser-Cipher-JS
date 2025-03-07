//dictionary for uppercase letters
export const dictionaryMayus = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
//dictionary for lowercase letters
export const dictionaryMinus = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"
];
//dictionary for numbers
export const dictionaryNumbers = [
    "0","1","2","3","4","5","6","7","8","9"
];
//dictionary for other icons
export const dictionarySpecial = [
    "!","#","$","%","&","/","(",")","=","?","¡","¿","*","+","-","_",":",";",".",",","@","|"
];

// Function to displace a character in the dictionary that belongs
export function moveCharacter(char, key, dictionary) {
    // Find the current index of the character in the dictionary array
    const index = dictionary.indexOf(char);
    // Calculate the new index by adding the key and ensuring it stays within the boundaries
    const newIndex = (index + key + dictionary.length) % dictionary.length;
    // Return the character at the new index
    return dictionary[newIndex];
}
