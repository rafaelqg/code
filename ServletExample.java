package com.mycompany.system_security_web;

import java.io.IOException;
import java.io.PrintWriter;
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
            response.getOutputStream().print("Data received by the server using GET.");
    }
}
