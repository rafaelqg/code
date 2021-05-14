/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package viginere;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author rafae
 */
public class EncryptViginere {
       
    public static void main(String args[]) throws FileNotFoundException, IOException{
        System.out.println("Input content:");
        String mensagem= (new Scanner (System.in)).nextLine();
        System.out.println("Cypher key:");
        String key= (new Scanner (System.in)).nextLine();

 
        int indexKeyChar=0;
        byte[] encryptedMessage= new byte[mensagem.length()];
        for(int i=0;i< mensagem.length();i++){
            char charOnMensagem=mensagem.charAt(i);
            char charOnKey=key.charAt(indexKeyChar++);
            char cypheredChar=(char)(charOnMensagem+charOnKey);
            
            encryptedMessage[i]=(byte)cypheredChar; 
            
            //loopback to the first char of the key
            if(indexKeyChar>=key.length()){
               indexKeyChar=0;
            }
        }
        
        System.out.println("Cyphered message: "+new String(encryptedMessage));
        File f=new File("cyphered_message");
        FileOutputStream fout= new FileOutputStream(f);
        DataOutputStream dout= new DataOutputStream(fout);
        dout.write(encryptedMessage);                
        dout.close();
        fout.close();
    }
    
}
