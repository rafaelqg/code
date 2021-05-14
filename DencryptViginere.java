/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package viginere;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

/**
 *
 * @author rafae
 */
public class DencryptViginere {
    public static void main(String args[]) throws FileNotFoundException, IOException{
        System.out.println("Decrypt message:");
        File f= new File("cyphered_message");
        FileInputStream fin=new FileInputStream(f);
        DataInputStream din= new DataInputStream(fin);
     
        byte[] menssage=new byte[fin.available()];
        din.readFully(menssage);
        
        System.out.println("Key:");
        String key= (new Scanner (System.in)).nextLine();
        
        int keyIndex=0;
        byte[] decryptedMessage= new byte[menssage.length];
        for(int i=0;i< menssage.length;i++){
            char charMenssage= (char)menssage[i];
            char charKey=key.charAt(keyIndex++);
            byte decryptedChar=(byte)(charMenssage-charKey);
            decryptedMessage[i]=decryptedChar;            
            if(keyIndex>=key.length()){
               keyIndex=0;
            }
        }
        System.out.println("Decrypted message: "+new String(decryptedMessage));
        f=new File("decrypt_message");
        FileOutputStream fout= new FileOutputStream(f);
        DataOutputStream dout= new DataOutputStream(fout);
        dout.write(decryptedMessage);
        dout.close();
        fout.close();
    }
}
