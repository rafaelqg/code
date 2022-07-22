from Crypto.Cipher import AES #This is the library
#Encrypt
originalMessage = "That is my TOP secret message"
#Its keys can be 128, 192, or 256 bits long.
#key = b'Sixteen byte key' # 16 bytes key
key = b'09865rfqghlafgtz78nafg3q' # 24 bytes key
#key = b'gavecrtqogavecrtqogavecrtqo23fde' # 32 bytes key
print("type of key", type(key))
#b converts the string content to bynary
cipher = AES.new(key, AES.MODE_EAX) #MODE_EAX => is about "how" to encript
data = str.encode(originalMessage) # we need to convert to bytes - we encrypt bytes - not strings
print("type of data", type(data))
ciphertext, messageDigest = cipher.encrypt_and_digest(data)
#chiperText contains the full content cryptographed
#hash contains the hash of original content for later validation
print("cryptographed content", ciphertext, type(ciphertext), len(ciphertext))
print("HASH", messageDigest, type(messageDigest), len(messageDigest))
#Decrypt
nonce = cipher.nonce
cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
plaintext = cipher.decrypt(ciphertext)

try:
    cipher.verify(messageDigest) # verify if the orignal hash match the output
    print("The message is authentic:", plaintext)
except ValueError:
    print("Key incorrect or message corrupted")
