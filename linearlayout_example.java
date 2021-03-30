package com.example.app_example;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

public class DynamicForm extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dynamic_form);
        String[] fieldsToCreate={"Name","e-mail","phone","Address","Company"};
        //add elements on layout
        LinearLayout ll= (LinearLayout)findViewById(R.id.linearLayoutDF);
        for (byte i=0;i<fieldsToCreate.length;i++){
            TextView t= new TextView(ll.getContext());
            t.setText(fieldsToCreate[i]);
            t.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    String str = ((TextView)v).getText().toString();
                    Toast.makeText(getBaseContext(),str, Toast.LENGTH_SHORT).show();
                }
            });
            ll.addView(t);
            EditText et = new EditText(this);
            LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
            et.setLayoutParams(p);
            et.setHint(fieldsToCreate[i]);
            et.setId(i);
            ll.addView(et);
        }
    }
}
