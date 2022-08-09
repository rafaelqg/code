from Crypto.Hash import SHA256

hash_object = SHA256.new(data=b'Enjoy your life!')
hashBinaryRaw = hash_object.digest()
print("binary:", hashBinaryRaw, type(hashBinaryRaw), len(hashBinaryRaw))
print("Hash lenght(SHA-256):", len(hashBinaryRaw)* 8)
hashHexaString = hash_object.hexdigest()
print("string:",hashHexaString, type(hashHexaString), len(hashHexaString))

newMessage = "Embrace your dreams!"
hash_object.update(newMessage.encode())
hashBinaryRaw = hash_object.digest()
print("binary:", hashBinaryRaw, type(hashBinaryRaw), len(hashBinaryRaw))
print("Hash lenght(SHA-256):", len(hashBinaryRaw)* 8)
hashHexaString = hash_object.hexdigest()
print("string:",hashHexaString, type(hashHexaString), len(hashHexaString))

