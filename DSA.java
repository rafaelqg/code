/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package signature;
import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.SignatureException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;


//The Digital Signature Algorithm (DSA)
//The DSA algorithm involves four operations: key generation (which creates the key pair), key distribution, signing and signature verification.
public class DSA {
 
    
     public static void main(String args[]) {
            try{
                //Remetente Gera Assinatura Digital para uma Mensagem
                  SignerUser  signer = new SignerUser ();
                  String message = "Every sunset give us one day less to live. But every sunrise give uso ne day more to hope.";
                                 
                byte[] sign = signMessage(message.getBytes(), signer.getPrivateKey());
                
                //Guarda Chave Pública para ser Enviada ao Destinatário
                PublicKey pubKey = signer.getPubKey();

                System.out.println("--- Example with a valid signature ---");
                validateMessageSignature(pubKey, message.getBytes(), sign);

                System.out.println("--- Example with a invalid signature: the message was changed  ---");
                String anotherMessage = "Don't let yesterday take up too much of today.";
                validateMessageSignature(pubKey, anotherMessage.getBytes(), sign);

                String message2 = "The pessimist sees difficulty in every opportunity.";
                SignerUser signerB=new SignerUser ();
                PublicKey pubKey2 = signerB.getPubKey();
                byte[] sign2 = signMessage(message2.getBytes(), signerB.getPrivateKey());
                

                System.out.println("--- Example with a invalid signature: using signature that does not match with the current message ---");
                validateMessageSignature(pubKey, message.getBytes(), sign2);

                System.out.println("--- Example with a invalid signature: using public key from another user ---");
                validateMessageSignature(pubKey2, message.getBytes(), sign);

        }catch(Exception e){
            e.printStackTrace();
        }
    }
    
    

    public static void validateMessageSignature(PublicKey publicKey, byte[] message, byte[] signature) throws
        NoSuchAlgorithmException, InvalidKeyException, SignatureException {
        Signature clientSig = Signature.getInstance("DSA");
        clientSig.initVerify(publicKey);
        clientSig.update(message);
        if (clientSig.verify(signature)) {
           System.out.println("The message is properly signed.");
        } else {
           System.err.println("It is not possible to validate the signature.");
        }
    }
    
     public static byte[] signMessage(byte[] message,PrivateKey privateKey) throws NoSuchAlgorithmException,
        InvalidKeyException, SignatureException {
              Signature sig = Signature.getInstance("DSA");
              sig.initSign(privateKey);
              sig.update(message);
              byte[] sign= sig.sign();
              return sign;
        }
    
    
    public static class SignerUser {
        private PublicKey publicKey;
        private PrivateKey privateKey;
        public PublicKey getPubKey() {
              return publicKey;
        }
        
        public SignerUser() throws NoSuchAlgorithmException{
            KeyPairGenerator kpg = KeyPairGenerator.getInstance("DSA");
            SecureRandom secRan = new SecureRandom();
            kpg.initialize(512, secRan);
            KeyPair keyP = kpg.generateKeyPair();
            this.publicKey= keyP.getPublic();
            this.privateKey = keyP.getPrivate();
        }

        public PublicKey getPublicKey() {
            return publicKey;
        }

        public void setPublicKey(PublicKey publicKey) {
            this.publicKey = publicKey;
        }

        public PrivateKey getPrivateKey() {
            return privateKey;
        }

        public void setPrivateKey(PrivateKey privateKey) {
            this.privateKey = privateKey;
        }
        
        


    }
}
