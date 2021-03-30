package com.example.app_example;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;


public class ActionItemsFragment extends Fragment {





    public ActionItemsFragment() {
        // Required empty public constructor
    }



    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.i("FRAGMENT_LIFE_CICLE", "onCreate");

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        Log.i("FRAGMENT_LIFE_CICLE", "onCreateView");
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_action_items, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        Log.i("FRAGMENT_LIFE_CICLE", "onViewCreated");
        Activity activity = getActivity();
        if(activity instanceof MainActivity){
            view.findViewById(R.id.imageViewBack).setVisibility(View.INVISIBLE);//INVISIBLE=4
        }

        View v=view.findViewById(R.id.configurationIconFrag);
        if(v!=null) {
            v.setOnClickListener(
                    new View.OnClickListener() {
                        public void onClick(View v) {
                            Intent myIntent = new Intent(getActivity().getBaseContext(), InputsExample.class);
                            startActivity(myIntent);
                        }
                    }
            );
        }else{
            Log.e("View not found:", String.valueOf(R.id.configurationButton));
        }

        v=view.findViewById(R.id.informationIcon);
        if(v!=null) {
            v.setOnClickListener(
                    new View.OnClickListener() {
                        public void onClick(View v) {
                            final String URI = "https://developer.android.com?p1=1";
                            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(URI));
                            startActivity(intent);
                            Log.i("Opening browser:", URI);
                        }
                    }
            );
        }else{
            Log.e("View not found:", String.valueOf(R.id.informationIcon));
        }

        view.findViewById(R.id.imageViewBack).setOnClickListener(
                new View.OnClickListener() {
                    public void onClick(View v) {
                        Intent myIntent = new Intent(getActivity().getBaseContext(), MainActivity.class);
                        startActivity(myIntent);
                    }
                }
        );

    }

    @Override
    public void onStart() {
        super.onStart();
        Log.i("FRAGMENT_LIFE_CICLE", "onStart");
    }

    @Override
    public void onPause() {
        super.onPause();
        Log.i("FRAGMENT_LIFE_CICLE", "onPause");
    }

    @Override
    public void onResume() {
        super.onResume();
        Log.i("FRAGMENT_LIFE_CICLE", "onResume");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.i("FRAGMENT_LIFE_CICLE", "onDestroy");
    }

    @Override
    public void onStop() {
        super.onStop();
        Log.i("FRAGMENT_LIFE_CICLE", "onPause");
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        Log.i("FRAGMENT_LIFE_CICLE", "onAttach");
    }

    @Override
    public void onDetach() {
        super.onDetach();
        Log.i("FRAGMENT_LIFE_CICLE", "onDetach");
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        Log.i("FRAGMENT_LIFE_CICLE", "onDestroyView");
    }
}
