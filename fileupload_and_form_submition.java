@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        if( request.getSession().getAttribute("user_id")==null){
            response.setStatus(500);
            response.getOutputStream().print("This funciton requires authentication...");
           return;
       }
       long userId=(long)request.getSession().getAttribute("user_id");
        PrivateKey privateKey=null;
          response.setContentType("text/html;charset=UTF-8");
        if(FileUpload.isMultipartContent(request)){ 
            try{
            DiskFileUpload upload=new DiskFileUpload();
            upload.setSizeMax(50*1024*1024);//50Mb
            List items=upload.parseRequest(request);
            Iterator it=items.iterator();
            String password="";
            byte[] privateKeyContent=null;
            while(it.hasNext()){
                FileItem fitem=(FileItem)it.next();
                if(!fitem.isFormField()){
                    //access file input content
                    if(fitem.getFieldName().equals("private_key")){
                        String fileName=fitem.getName();
                        File f=new File(fileName);
                        FileOutputStream fo=new FileOutputStream(f);
                        DataOutputStream dados=new DataOutputStream(fo);
                        privateKeyContent=fitem.get();
                        dados.write(privateKeyContent,0,(int)fitem.getSize());
                        dados.close();
                        fo.close();
                    }
                    
                }else{
                    // Process regular form field (input type="text|radio|checkbox|etc", select, etc).
                    String fieldname = fitem.getFieldName();
                    String fieldvalue = fitem.getString();
                    if(fieldname.equals("password")){
                        password=fieldvalue;
                    }
                }
            }
               //encrypt private key with AES
                privateKeyContent=AES.encrypt(privateKeyContent, password);

                DataSourceMySQL ds = new DataSourceMySQL();
                String sql = "update secret_messages.users set private_key=? where id=?";
                Connection con = ds.getCon();
                PreparedStatement ps = con.prepareStatement(sql);
                ps.setBytes(1, privateKeyContent);
                ps.setLong(2, userId);
                ps.execute();
            
       
            }catch(FileUploadException e){
               e.printStackTrace();
            } catch (SQLException ex) {
                Logger.getLogger(sendPrivateKey.class.getName()).log(Level.SEVERE, null, ex);
            } catch (Exception ex) {
                Logger.getLogger(sendPrivateKey.class.getName()).log(Level.SEVERE, null, ex);
            } 
        }
    }
