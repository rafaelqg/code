/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rafael.q.g.javaweb20212.servlets;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author rafael queiroz gonçalves
 */
public class PDFDownloader extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       //verify if user is authenticated based on its token and its authorized
       boolean userHasAccess=false;
       if(userHasAccess){
        File f= new File("C:\\Users\\rafae\\Desktop\\private_document.pdf");
        FileInputStream fis= new FileInputStream(f);
        DataInputStream din= new DataInputStream(fis);
        byte[] fileContent=new byte[din.available()];
        din.readFully(fileContent);
        
        response.setContentType("application/pdf");
        response.getOutputStream().write(fileContent);
       }else{
           response.setStatus(401);
       }
    }

 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
    }

 

}
