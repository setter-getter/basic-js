const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let messageCharCode = message.charCodeAt(i);

      if (messageCharCode >= 65 && messageCharCode <= 90) {
        let keyCharCode = key.charCodeAt(j % key.length);

        let encryptedCharCode = ((messageCharCode + keyCharCode - 130) % 26) + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);

        j++;
      } else {
        encryptedMessage += message.charAt(i);
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptedCharCode = encryptedMessage.charCodeAt(i);

      if (encryptedCharCode >= 65 && encryptedCharCode <= 90) {
        let keyCharCode = key.charCodeAt(j % key.length);

        let messageCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 65;
        message += String.fromCharCode(messageCharCode);

        j++;
      } else {
        message += encryptedMessage.charAt(i);
      }
    }

    return this.isDirect ? message : message.split('').reverse().join('');
  }F
}

module.exports = {
  VigenereCipheringMachine
};
