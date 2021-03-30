/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package example.oo.main;


import com.sun.tools.javac.util.ArrayUtils;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.channels.SeekableByteChannel;
import java.nio.charset.Charset;

import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;


public class NewIO {
  
    	public static void main(String args[]) throws IOException {
            String dataToBeWritten = "Java New I/O (NIO) API";
            byte[] byteArray = dataToBeWritten.getBytes();	
            String fileName="file_nio.txt";   

            fileChannelWrite(byteArray, fileName);
            byte[] fileContent= fileChannelRead(fileName);
            String textualContent=new String (fileContent);
            System.out.println("File content: "+textualContent);    
	}

        
        
	public static byte[] fileChannelRead(String fileName) throws IOException {
		RandomAccessFile randomAccessFile = new RandomAccessFile(fileName,"rw");
		FileChannel fileChannel = randomAccessFile.getChannel();// A channel for read and writting a file
		long length=randomAccessFile.length();//get how many bits are available to be read
                
                ByteBuffer byteBuffer = ByteBuffer.allocate((int)length);//creates an array buffer with exactaly the numbers of bytes of the file
                fileChannel.read(byteBuffer);// read file conent
                fileChannel.close();
                randomAccessFile.close();
                
                //converz ByteBuffer to byte[] for output
                byte[] content= byteBuffer.array();        
                return content;
	}

        //ByteBuffer, Path, and FileChanel
	public static void fileChannelWrite(byte[] byteArray, String fileName) throws IOException {               
                //transforms byte[] in ByteBuffer whcht FileChannel works
                ByteBuffer byteBuffer = ByteBuffer.wrap(byteArray);
                
                //Object representation of file/folder location
                Path path = Paths.get(fileName);
                
                //options for opening the file
		Set options = new HashSet();
		options.add(StandardOpenOption.CREATE);
		options.add(StandardOpenOption.WRITE);
                

		FileChannel fileChannel = FileChannel.open(path, options);            
		fileChannel.write(byteBuffer);
		fileChannel.close();
	}
        
}
