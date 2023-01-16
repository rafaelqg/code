// Nodejs encryption with CTR
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = "mypasswith32chars>>AES_256_bytes";//crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //inicialization vector

function encrypt(text) {
 let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted;
}

const textToEncrypt = "A dream doesn't become reality through magic; it takes sweat, determination and hard work.";
const textToEncryptAsByteArray = Buffer.from(textToEncrypt);
var hw = encrypt(textToEncryptAsByteArray)
console.log("encrypt result", hw);
let decryptedContent = decrypt(hw);
decryptedContentAsText = decryptedContent.toString();
console.log("decrypt result", decryptedContentAsText)
