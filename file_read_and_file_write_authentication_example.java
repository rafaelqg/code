//file A
public class LoadUsers extends HttpServlet {

 


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String username="rafaelqg";
        String password="files1234!";
        String fileName=username+".txt";
        File f= new File(fileName);
        FileOutputStream fos= new FileOutputStream(f);
        DataOutputStream dos= new DataOutputStream(fos);
        
        try {
            byte[] messageDigestPassword= Hash.sha512(password);         
             dos.write(messageDigestPassword);
             dos.close();
             fos.close();
             System.out.println(f.getAbsolutePath());
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(LoadUsers.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

   

}

// file B
import hash.Hash;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class login extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
            String login=request.getParameter("login");
            String password=request.getParameter("password");
            System.out.println(login);
            System.out.println(password);
            response.getOutputStream().print("Data received by the server using post.");
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
            String login=request.getParameter("login");
            String password=request.getParameter("password");
            
            System.out.println(login);
            System.out.println(password);
            
            try {
                byte[] messageDigestPassword= Hash.sha512(password);
                String fileName=login.concat(".txt");
                File f= new File(fileName);
                if(f.exists()){
                    FileInputStream fis= new FileInputStream(f);
                    DataInputStream dis= new DataInputStream(fis);
                    byte[] data= new byte[dis.available()];
                    dis.read(data);
                    dis.close();
                    fis.close();
                    String storedPasswordMD= new String(data);
                    String receivedPasswordMD= new String(messageDigestPassword);
                    if(storedPasswordMD.equals(receivedPasswordMD)){
                        System.out.println("User authenticated");
                    }else{
                        System.err.println("Credentials are wrong");
                    }
                        System.out.println(new String(data).equals(new String(messageDigestPassword)));
                        System.out.println();
                }else{
                    System.err.println("User account not found.");
                }
            } catch (NoSuchAlgorithmException ex) {
                ex.printStackTrace();
            }
           
            response.getOutputStream().print("Data received by the server using GET.");
    }
}


// file C
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

