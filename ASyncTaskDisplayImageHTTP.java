private class ThreadImageFile extends AsyncTask<Integer, Integer, byte[]> {
        @Override
        protected byte[] doInBackground(Integer... integers) {
            String resourceURI = "https://static.wikia.nocookie.net/ptstarwars/images/0/01/Hansoloprofile.jpg/revision/latest/top-crop/width/360/height/450?cb=20120222133702";
            byte[] content=null;
            try {
                URL url = new URL(resourceURI);
                HttpURLConnection con = null;
                con = (HttpURLConnection) url.openConnection();
                con.setRequestMethod("GET");
                InputStream is = con.getInputStream();
                ByteArrayOutputStream os= new ByteArrayOutputStream();
                byte[] buffer = new byte[1024];
                int bytesRead;
                while ((bytesRead = is.read(buffer)) != -1) {
                    os.write(buffer, 0, bytesRead);
                }

                content=os.toByteArray();

            }catch(Exception e){
                e.printStackTrace();
            }
            return content;
        }

        @Override
        protected void onPostExecute (byte[] result) {
            LinearLayout ll=(LinearLayout)findViewById(R.id.LLItems);
            ImageView iv= new ImageView(getBaseContext());
            LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(250, 250);
            iv.setLayoutParams( params);
            Bitmap bmp= BitmapFactory.decodeByteArray(result,0,result.length);
            iv.setImageBitmap(bmp);
            ll.addView(iv);
        }
    }
