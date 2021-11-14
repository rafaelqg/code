
package rafael.q.g.security_example_p7s;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import org.demoiselle.signer.policy.impl.cades.SignatureInformations;
import org.demoiselle.signer.policy.impl.cades.pkcs7.impl.CAdESChecker;
/*

   <dependency>
                <groupId>br.gov.frameworkdemoiselle</groupId>
                <artifactId>demoiselle-core</artifactId>
                <version>2.5.2</version>
            </dependency>

            <dependency>
                <groupId>org.demoiselle.signer</groupId>
                <artifactId>policy-impl-cades</artifactId>
                <version>3.2.7</version>
            </dependency>

*/

public class P7SValidator {
    
    
    public static void main(String[] args){


    System.out.println("P7S: Valid example");
    byte[] content = readContent("p7s_examples\\file_A.pdf"); 
    byte[] signature = readContent("p7s_examples\\file_A.p7s");           
      
     if(validateSignature(signature,content )){
         System.out.println("The signature is valid.");
     }else{
         System.out.println("The signature is not valid.");
     }   
     
    System.out.println("P7S: Invalid example");
    content = readContent("p7s_examples\\file_A.pdf"); 
    signature = readContent("p7s_examples\\file_B.p7s");           
     if(validateSignature(signature,content )){
         System.out.println("The signature is valid.");
     }else{
         System.out.println("The signature is not valid.");
     }   
     
     
    }
    
    
      public static boolean validateSignature(byte[] signature,byte[] content ){
       CAdESChecker checker = new CAdESChecker();
       try{
       List<SignatureInformations> signaturesInfo = checker.checkDetattachedSignature(content, signature);
       if(signaturesInfo.size()==0){
           System.out.println("No information about signature...");
       }else{
           SignatureInformations info=signaturesInfo.get(0);
           System.out.println("Signature Date: "+info.getSignDateGMT());
           System.out.println("Signature HASH: "+info.getSignaturePolicy().getSignPolicyHash().getValueUTF8());
           System.out.println("Signature - Signed by: "+info.getSignersBasicCertificates().get(0).getNome());
           if(signaturesInfo.get(0).getValidatorErrors().size()==0){
               System.out.println("Success - no validation error...");
           }else{
               System.out.println("Warnings:");
               for(String error: signaturesInfo.get(0).getValidatorErrors()){
                 //  System.out.println(error);
               }
           }
       }
       }catch(Exception e){
          // e.printStackTrace();
           return false;
       }
       return true;
    }
    
    public static byte[] readContent(String filePath) {
        File f= new File(filePath);
        byte[] content=null;
        try{
        FileInputStream fis= new FileInputStream(f);
        DataInputStream dis= new DataInputStream(fis);
        content= new byte[fis.available()];
        dis.read(content);
        }catch(Exception e){
            e.printStackTrace();
        }
        return content;
    }
}
