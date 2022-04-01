package example.oo.main;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;


public class FileReaderExample {
    public static void main (String args[]) throws FileNotFoundException, IOException{
        String path="myfile.txt";
        File f= new File(path);
        FileInputStream fis= new FileInputStream(f);
        DataInputStream dis= new DataInputStream(fis);
        
        byte[] content=new byte[fis.available()];
        dis.read(content);
        dis.close();
        fis.close();
        String contentString= new String(content);
        System.out.println(contentString);
    }
}
