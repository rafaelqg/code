from Crypto.PublicKey import DSA
from Crypto.Signature import DSS
from Crypto.Hash import SHA256
PRIVATE_KEY_FILE_NAME = "private_key.pem"
PUBLIC_KEY_FILE_NAME = "public_key.pem"
MESSAGE = b"Learn as if you will live forever, live like you will die tomorrow. - Mahatma Gandhi"

#1) Creating a key pair
key = DSA.generate(2048)
print("key object", key)
f = open(PUBLIC_KEY_FILE_NAME, "wb") # w
f.write(key.publickey().export_key())
f.close()
f = open(PRIVATE_KEY_FILE_NAME, "wb") # w
f.write(key.export_key("PEM", True))
f.close()

#2) Sign a message with the private key
hash_obj = SHA256.new(MESSAGE)
print("Importing private key for sign")
f = open(PRIVATE_KEY_FILE_NAME, "r")
key = DSA.import_key(f.read())
signer = DSS.new(key, 'fips-186-3')  # Digital Signature Standard (DSS)
signature = signer.sign(hash_obj) # Just the message hash is signed
print("original message hash", hash_obj.hexdigest())
print("Signature of original message hash", signature)
f = open("signature", "wb")
f.write(signature)
f.close()

#3) Validating the message signature with the public key
#1-Load the public key from file
print ("Importing public key for validating signature")
f = open(PUBLIC_KEY_FILE_NAME, "r")
#2-Import public key to verify if signature is valid
public_key = DSA.import_key(f.read())
verifier = DSS.new(public_key, 'fips-186-3')
#3-Read the registered signature
f = open("signature", "rb")
signature = f.read()
f.close()
#4-Generate the hash of original message (without signature)
hash_obj = SHA256.new(MESSAGE)
# Verify the authenticity of the message: orignal hash against the signature
try:
    verifier.verify(hash_obj, signature)
    print ("The message is authentic.")
except ValueError:
    print ("The message is not authentic.")
