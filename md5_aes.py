from Crypto.Hash import MD5
from Crypto.Hash import SHA256

print("###Generating hash with MD5###")
myMessage = "Today is a good day to be happy!! :)"
hashAlgorithm = MD5.new()
hashAlgorithm.update(myMessage.encode())
digest = hashAlgorithm.hexdigest()
print("hexa representation", digest, type(digest), len(digest), "bits length", len(digest) * 4 )

print("###Generating hash with SHA256###")
hashAlgorithm = SHA256.new()
hashAlgorithm.update(myMessage.encode())
digest = hashAlgorithm.hexdigest()
print ("hexa representation",digest, type(digest),"bits length", len(digest) * 4)
