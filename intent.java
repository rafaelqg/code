 
// activity A
int[] ids = {R.id.textViewContact_1,R.id.textViewContact_2,R.id.textViewContact_3,R.id.textViewContact_4,R.id.textViewContact_5};
       for(int id:ids) {
           findViewById(id).setOnClickListener(
                   new View.OnClickListener() {
                       public void onClick(View v) {
                           TextView tv = (TextView) v;
                           Intent myIntent = new Intent(getBaseContext(), ConversationActivity.class);
                           myIntent.putExtra("userName", tv.getText().toString());
                           startActivity(myIntent);
                       }
                   }
           );
       }

// activity B
String userName = getIntent().getStringExtra("userName");

        View v=findViewById(R.id.textViewConversationWith);
        TextView tv=(TextView)v;
        tv.setText("Conversation with ".concat(userName));

        findViewById(R.id.imageViewBack).setOnClickListener(
                new View.OnClickListener() {
                    public void onClick(View v) {
                        Intent myIntent = new Intent(getBaseContext(), MainActivity.class);
                        startActivity(myIntent);
                    }
                }
        );
