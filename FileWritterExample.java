package example.oo.main;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;


public class FileWritterExample {
    public static void main (String args[]) throws FileNotFoundException, IOException{
        String path="myfile.txt";
        File f= new File(path);
        FileOutputStream fos= new FileOutputStream(f);
        DataOutputStream dos= new DataOutputStream(fos);
        String contentString="With great power there must also come – great responsibility. (Uncle Ben)";
        byte[] content=contentString.getBytes();
        dos.write(content);
        dos.close();
        fos.close();
        System.out.println(f.getAbsolutePath());
        
    }
}
