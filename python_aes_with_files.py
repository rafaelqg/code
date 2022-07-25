from Crypto.Cipher import AES #This is the library
#using strings
originalMessage = "That is my TOP secret message"
data = str.encode(originalMessage)
print ("string", data, type(data))
#using files
file = open('top_secret.pdf', "rb")
data = file.read(-1)
print ("file", data, type(data))

#Its keys can be 128, 192, or 256 bits long.
#key = b'Sixteen byte key' # 16 bytes key
#key = b'09865rfqghlafgtz78nafg3q' # 24 bytes key
#Encrypt
key = b'gavecrtqogavecrtqogavecrtqo23fde' # 32 bytes key
print("type of key", type(key))
#b converts the string content to bynary
cipher = AES.new(key, AES.MODE_EAX) #MODE_EAX => is about "how" to encript
 # we need to convert to bytes - we encrypt bytes - not strings
print("type of data", type(data))
encryptedContent, messageDigest = cipher.encrypt_and_digest(data)
#chiperText contains the full content cryptographed
#hash contains the hash of original content for later validation
print("cryptographicContent", encryptedContent, type(encryptedContent), len(encryptedContent))
print("HASH", messageDigest, type(messageDigest), len(messageDigest))
#Decrypt
nonce = cipher.nonce
cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
decryptContent = cipher.decrypt(encryptedContent)

try:

    cipher.verify(messageDigest) # verify if the orignal hash match the output
    print("The message is authentic:", decryptContent)
except ValueError:
    print("Key incorrect or message corrupted")
