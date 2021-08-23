response.getWriter().println("Header - Accept-Language:"+request.getHeader("Accept-Language"));
        response.getWriter().println("Header - User-Agent:"+request.getHeader("User-Agent"));
        response.getWriter().println("Header - sec-ch-ua:"+request.getHeader("sec-ch-ua"));
        response.getWriter().println("Header - Accept:"+request.getHeader("Accept"));
        response.getWriter().println("Header - Accept-Encoding:"+request.getHeader("Accept-Encoding"));
        response.getWriter().println("Header - Host:"+request.getHeader("Host"));
        
