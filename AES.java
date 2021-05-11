
package simetric;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.Cipher;

//AES - Advanced Encryption Standard
public class AES {

       static String IV = "AAAAAAAAAAAAAAAA"; // initialisation vector (IV) with the same size of the cypher block
       //static String key = "0123456789abcdef"; //(128 bits - 16 chars) 
       //static String key = "0123456789abcdef12345678"; //(192 bits - 24 chars) 
       static String key = "0123456789abcdef1234567898765432"; // (256 bits - 32 chars)
       
  
       public static byte[] encrypt(byte[] originalContent, String keyText) throws Exception {
             Cipher encrypt = Cipher.getInstance("AES/CBC/PKCS5Padding", "SunJCE");
             SecretKeySpec key = new SecretKeySpec(keyText.getBytes("UTF-8"), "AES");
             encrypt.init(Cipher.ENCRYPT_MODE, key,new IvParameterSpec(IV.getBytes("UTF-8")));
             return encrypt.doFinal(originalContent);
       }
  
       public static byte[] decrypt(byte[] encryptedContent, String keyText) throws Exception{
             Cipher decrypt = Cipher.getInstance("AES/CBC/PKCS5Padding", "SunJCE");
             SecretKeySpec key = new SecretKeySpec(keyText.getBytes("UTF-8"), "AES");
             decrypt.init(Cipher.DECRYPT_MODE, key,new IvParameterSpec(IV.getBytes("UTF-8")));
             return decrypt.doFinal(encryptedContent);
       }
       
         public static void main(String [] args) {
             try {
                    String plainText = "Never look down on someone unless you are helping them up.";
                     System.out.println("Original text: " + plainText); 
                    //Encrypting
                       
                    byte[] encriptedText = encrypt( plainText.getBytes(), key);
                                
                    //just for visual representation of encripted content
                    System.out.print("Encrypted text:");
                    for (int i=0; i<encriptedText.length; i++)
                           System.out.print(new Integer(encriptedText[i])+" ");     
                    System.out.println("");
                    
                    //Decrypting
                    byte[] decryptedText = decrypt(encriptedText, key);                     
                    System.out.println("Decrypeted text: " + new String(decryptedText));    
             } catch (Exception e) {
                    e.printStackTrace();
             }
       }
        
}

