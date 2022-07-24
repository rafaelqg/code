from Crypto.PublicKey import RSA
from Crypto.Random import get_random_bytes
from Crypto.Cipher import AES, PKCS1_OAEP
#Source: https://pycryptodome.readthedocs.io/en/latest/src/examples.html#generate-an-rsa-key
#Part 1: generate key pairs
print("###Generating Key pair###")
key = RSA.generate(2048)
private_key = key.export_key()
file_out = open("privatekey.pem", "wb")
file_out.write(private_key)
file_out.close()
public_key = key.publickey().export_key()
file_out = open("publickey.pem", "wb")
file_out.write(public_key)
file_out.close()

#Part 2: send message to receiver (using public key)
print("###Encrypt the message using the receiver publickey###")
myMessage = "Each dream you leave behind is a part of your future that will no longer exist (Steve Jobs)";
print ("Original message to be encrypted:", myMessage)
data = myMessage.encode("utf-8")
file_out = open("encrypted_data", "wb")
recipient_key = RSA.import_key(open("publickey.pem").read())
# Encrypt the session key with the public RSA key
cipher_rsa = PKCS1_OAEP.new(recipient_key)
enc_session_key = cipher_rsa.encrypt(data)
# Save content into a file
file_out.write(enc_session_key)
file_out.close()

#part 3: receiver will read the message (using private key)
print("###Decrypt the message using the receiver privatekey###")
file_in = open("encrypted_data", "rb")
private_key = RSA.import_key(open("privatekey.pem").read())
enc_session_key = file_in.read(private_key.size_in_bytes())
# Decrypt the session key with the private RSA key
cipher_rsa = PKCS1_OAEP.new(private_key)
data = cipher_rsa.decrypt(enc_session_key)
print("Receiver decrypt message", data.decode("utf-8"))
