private class ThreadGetMessages extends AsyncTask<Integer, Integer, String> {
        @Override
        protected String doInBackground(Integer... integers) {
            Log.i("ASyncTask", "requesting...");

            String resourceURI = "https://jsonplaceholder.typicode.com/posts";
            String httpParameters = "";
            String formatedURL = resourceURI + httpParameters;
            URL url = null;

            try {
                url = new URL(formatedURL);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

            HttpURLConnection con = null;
            try {
                con = (HttpURLConnection) url.openConnection();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                con.setRequestMethod("GET");
            } catch (ProtocolException e) {
                e.printStackTrace();
            }

            InputStream is = null;
            try {
                is = con.getInputStream();
            } catch (IOException e) {
                e.printStackTrace();
            }
            java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
            String response = s.hasNext() ? s.next() : "";
            Log.i("ASyncTask", "requesting concluded." + response);


            JsonParser parser = new JsonParser();
            //JsonObject obj = parser.parse(response).getAsJsonObject();
            JsonArray array = parser.parse(response).getAsJsonArray();
            JsonObject obj = (JsonObject) array.get(0);
            String title = obj.get("title").getAsString();

            Log.i("ASyncTask", "title>>" + title);

            return title;
        }

        @Override
        protected void onPostExecute (String result) {
            View v=findViewById(R.id.exportIcon);
            // Log.i("ASyncTask",result);
            LinearLayout ll=(LinearLayout)findViewById(R.id.LLItems);
            TextView tv=new TextView(getBaseContext());
            tv.setText(result);
            tv.setTextColor(Color.WHITE);
            ll.addView(tv);

        }
    }
