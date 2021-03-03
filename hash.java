package hash;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class Hash {
    //SHA (Secure Hash Algorithm)
    //MD5 (Message Digest)
    public static void main(String[] args) throws NoSuchAlgorithmException{
        String myMessage="MD5(128), SHA-1(160), SHA-256, SHA-512 are examples of hash algorithms";
        
        byte[] digest=md5(myMessage);
        System.out.println("MD5 hash size: "+digest.length);
        String hash=hexaToString(digest);
        System.out.println(hash + " ("+String.valueOf(hash.length())+")");
                
        digest=sha1(myMessage);
        System.out.println("SHA-1 hash size: "+digest.length);
        hash=hexaToString(digest);
        System.out.println(hash+ " "+String.valueOf(hash.length()));
        
        digest=sha256(myMessage);
        System.out.println("SHA-256 hash size: "+digest.length);
        hash=hexaToString(digest);
        System.out.println(hash+ " "+String.valueOf(hash.length()));
        
        digest=sha512(myMessage);
        System.out.println("SHA-512 hash size: "+digest.length);
        hash=hexaToString(digest);
        System.out.println(hash+ " "+String.valueOf(hash.length()));
        
        digest=sha3256(myMessage);
        System.out.println("SHA3-256 hash size: "+digest.length);
        hash=hexaToString(digest);
        System.out.println(hash + " "+String.valueOf(hash.length()));
        
    }
    
     public static byte[] sha1(String message) throws NoSuchAlgorithmException{   
        MessageDigest md = MessageDigest.getInstance("SHA-1"); 
        md.update(message.getBytes());
        byte[] digest = md.digest();
        return digest;
    }
     
    public static byte[] sha256(String message) throws NoSuchAlgorithmException{   
        MessageDigest md = MessageDigest.getInstance("SHA-256"); //SHA (Secure Hash Algorithm)
        md.update(message.getBytes());
        byte[] digest = md.digest();
        return digest;
    }
     public static byte[] sha3256(String message) throws NoSuchAlgorithmException{   
        MessageDigest md = MessageDigest.getInstance("SHA3-256"); //SHA (Secure Hash Algorithm)
        md.update(message.getBytes());
        byte[] digest = md.digest();
        return digest;
    }
    
     public static byte[] sha512(String message) throws NoSuchAlgorithmException{   
        MessageDigest md = MessageDigest.getInstance("SHA-512"); //SHA (Secure Hash Algorithm)
        md.update(message.getBytes());
        byte[] digest = md.digest();
        return digest;
    }
    
    public static byte[] md5(String message) throws NoSuchAlgorithmException{   
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(message.getBytes());
        byte[] digest = md.digest();
        return digest;
    }
    
    
    public static String hexaToString(byte[] digest ){
        // Convert digest to a string
        StringBuffer hexString = new StringBuffer();
        for (int i = 0; i < digest.length; i++) {
            if ((0xff & digest[i]) < 0x10) {
                hexString.append("0" + Integer.toHexString((0xFF & digest[i])));
              } else {
                hexString.append(Integer.toHexString(0xFF & digest[i]));
            }
        }  
        return hexString.toString();  
    }
}
