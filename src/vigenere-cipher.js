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
  constructor(isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
  }

  static get ALPHABET_LENGTH() {
    return 26;
  }

  static get ALPHABET_START_CODE() {
    return 65;
  }

  encrypt(message, key) {
    if (typeof message !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    const cipherText = [];
    let pos = 0;
    for (const ch of message) {
      if (ch < "A" || ch > "Z") {
        cipherText.push(ch);
      } else {
        const msgCode = ch.charCodeAt(0);
        const keyCode = key.charCodeAt(pos % key.length);
        const cipherChar = String.fromCharCode(
          ((msgCode + keyCode) % VigenereCipheringMachine.ALPHABET_LENGTH) +
            VigenereCipheringMachine.ALPHABET_START_CODE
        );
        cipherText.push(cipherChar);
        pos++;
      }
    }
    return this.isDirectMachine
      ? cipherText.join("")
      : cipherText.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    key = key.toUpperCase();
    const plainText = [];
    let pos = 0;
    for (const ch of encryptedMessage) {
      if (ch < "A" || ch > "Z") {
        plainText.push(ch);
      } else {
        const msgCode = ch.charCodeAt(0);
        const keyCode = key.charCodeAt(pos % key.length);
        const plainChar = String.fromCharCode(
          ((msgCode - keyCode + VigenereCipheringMachine.ALPHABET_LENGTH) %
            VigenereCipheringMachine.ALPHABET_LENGTH) +
            VigenereCipheringMachine.ALPHABET_START_CODE
        );
        plainText.push(plainChar);
        pos++;
      }
    }
    return this.isDirectMachine
      ? plainText.join("")
      : plainText.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
