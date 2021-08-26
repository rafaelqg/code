package com.example.P20212;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class VisibilityExample extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_visibility_example);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        Button bt=findViewById(R.id.buttonVisible);
        setOnClick(bt, View.VISIBLE);

        bt=findViewById(R.id.buttonInVisible);
        setOnClick(bt, View.INVISIBLE);

        bt=findViewById(R.id.buttonGone);
        setOnClick(bt, View.GONE);
    }

    private void setOnClick(Button button, int visibility){
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                TextView tv= findViewById(R.id.textView);
                tv.setVisibility(visibility);
            }
        });
    }
}

