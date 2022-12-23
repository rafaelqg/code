//npm install node-rsa
const NodeRSA = require('node-rsa');
//1. Genarete key pair
//let rsaKey = new NodeRSA({b: 512}); //generate random key pair with 512 byes length (must be multiple of 8)
//Example creating keypair based on existing key.
const privateKeyLiteral  = `-----BEGIN PRIVATE KEY-----
MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEAk6pJ6UL1XrKQvuXD
o78idU5L6icKH9VLQDVKy/5sIAJwp7YRxvz1EImK7KP9V1tE6s1Zy+Z6xQ29G3tE
IWv46wIDAQABAkAaBiLshy5zOAkme5vVGfRatCfQ5nx0S8TtVfcOqJIpub2lYWzi
LIBE+nbvYNLKnZCNRPG14AJkohuztZUDm3uBAiEA+h6YDSIjsZeHcfQIonRXKRns
q4NFSATK0c44woImwKECIQCXIwxTNC2RSBjXGglJhbIS+dlM60dtEuEqkDZjc7py
CwIgXSfx58pUUvul9bo3URJVuDgwnry4nBc01ymgmElTV6ECIFPpL5SaaZo5ryDt
4a4iPmXutcjQ8A0M6FqbSrcYr7FVAiBEr+nWLJEh1x3YI+GdySHK+oKsVc6svv3L
fQdT9LYcGg==
-----END PRIVATE KEY-----`;
let rsaKey = new NodeRSA(privateKeyLiteral);
console.log("rsaKey", rsaKey);
const privateKey = rsaKey.exportKey("pkcs8-private");//"private"
const publicKey = rsaKey.exportKey("pkcs8-public");//"public"
console.log("privateKey", privateKey);
console.log("publicKey", publicKey); //pkcs8-public

//2. Define content to be encrypted
const text = "I learned that courage was not the absence of fear, but the triumph over it.";

//3. Encrypt the content using the public key
const encrypted = rsaKey.encrypt(text); //, 'base64'
const encryptedBase64 = encrypted.toString('base64');
console.log('encrypted: ', encrypted, typeof encrypted, encryptedBase64);

//4. Decrypt the content using the private key
const decrypted = rsaKey.decrypt(encrypted); //, 'utf8'
const decryptedString = decrypted.toString('utf8');
console.log('decrypted: ', decrypted, typeof decrypted, decryptedString);
