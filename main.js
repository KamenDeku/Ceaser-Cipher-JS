import { encrypt } from './src/encrypt.js'; //Import methods from the encrypt.js file
import { decrypt } from './src/decrypt.js'; //Import methods from the decrypt.js file
import readline from 'readline'; //Import the readline module from Node.js

//Create an interface to read the input from the user
let input =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ceaserCipher() {
    //Ask the user to select an option
    input.question("Selec an option: " + "\n- 1: Encrypt" + "\n- 2: Decrypt" + "\n- 3: Exit" + "\n", function (option) {
        console.log("\nYou've selected: " + option +"\n");
        console.log("----------------------\n");
        //Turn any input into lowercase
        option = option.trim().toLowerCase();

        //Tell to the program what to do with the info
        switch (option) {

            //Enter the cae of encripting the message
            case "1":
            case "encrypt":
                    //Tells to the program to encrypt the message
                    information("encrypt");
                break;
            //Enter the case of decripting the message
            case "2":
            case "decrypt":
                    //Tells to the program to decrypt the message
                    information("decrypt");
                break;
            
            case "3":
            case "exit":
                console.log("Closing the program...");
                console.log("----------------------\n");
                input.close();
                break;

            default:
                console.log("\nInvalid option. Please select a valid option.\n");
                console.log("\n----------------------\n");
                ceaserCipher();
        }

    });

};

function information(type) {

    //Decalara el mensaje
    input.question("Enter the message to " + type + ":", function (msg) {
        //Decalara la clave/numero de desplazamiento
        input.question("Enter the displacement value:", function (key) {
            console.log("\n----------------------\n");
            //Obliga a que el valor sea un int
            key = parseInt(key);

            let ciphereddMessage;

            if (type === "encrypt") {
                ciphereddMessage = encrypt(msg, key);
                console.log(ciphereddMessage + "\n");
            } else {
                ciphereddMessage = decrypt(msg, key);
                console.log(ciphereddMessage + "\n");
            }
            console.log("----------------------\n");

            ceaserCipher();
        });
    });
};

ceaserCipher();
