package com.example.app_example;

import android.content.Intent;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(0);

    }

   

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("Life cycle:", "onPause ...");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("Life cycle:", "onStop ...");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("Life cycle:", "onDestroy ...");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("Life cycle:", "onResume ...");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("Life cycle:", "onStart ...");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("Life cycle:", "onRestart ...");
    }
}
