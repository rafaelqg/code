
package rafael.q.g.javaweb20212.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookiesManager extends HttpServlet {





    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
      
       //reading cookies received in the HTTP resquest
       response.getWriter().println("Cookies stored in your browser: ");
       Cookie[] cookieList=request.getCookies();
       for(Cookie c: cookieList){
           response.getWriter().println(c.getName()+":"+c.getValue());
       }
       
       //creating a new cookie
       //Cookie ck= new Cookie("username","SpongeBob SquarePants");
       //response.addCookie(ck);//adding cookie in the response
      
       
       Cookie ck= new Cookie("best_friend","Patrick");
       response.addCookie(ck);//adding cookie in the response
       
       
       //deleting a cookie
       ck= new Cookie("username","");
       ck.setMaxAge(0);
       response.addCookie(ck);//adding cookie in the response
       
    }

 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
 
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
