//class that sends the resource id
int[] ids = {R.id.textViewContact_1,R.id.textViewContact_2,R.id.textViewContact_3,R.id.textViewContact_4,R.id.textViewContact_5};
       int[] avatarsIds= {R.drawable.luke,R.drawable.obi_wan,R.drawable.yoda, R.drawable.darth_vader, R.drawable.darth_maul};
       for(byte i=0;i<ids.length;i++) {
           int id=ids[i];
           int avatarId=avatarsIds[i];
           findViewById(id).setOnClickListener(
                   new View.OnClickListener() {
                       public void onClick(View v) {
                           TextView tv = (TextView) v;
                           Intent myIntent = new Intent(getBaseContext(), ConversationActivity.class);
                           myIntent.putExtra("userName", tv.getText().toString());
                            myIntent.putExtra("imageResourceId", avatarId);
                           startActivity(myIntent);
                       }
                   }
           );
       }

//class that receives the resource id
   int imageResourceId= getIntent().getIntExtra("imageResourceId",0);


       Bitmap bitmap= BitmapFactory.decodeResource(getResources(), imageResourceId);
       ImageView iv= (ImageView) findViewById(R.id.imageViewContact);
       iv.setImageBitmap(bitmap);
