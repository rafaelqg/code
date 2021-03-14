/*

                new AlertDialog.Builder (view.getContext()).setTitle("Attention")
                        .setMessage(msg)
                        .setNeutralButton("Close", null)
                        .show();
*/
///*
                new AlertDialog.Builder(view.getContext()).setTitle("Confirm language change?")
                        .setMessage("Do you really what to change the APP language to "+str+"?")
                        .setPositiveButton("YES",
                                new DialogInterface.OnClickListener() {
                                    public void onClick(DialogInterface dialog, int which) {
                                        Log.i("Dialog yes", "Language change confirmed.");
                                        dialog.dismiss();
                                    }
                                })
                        .setNegativeButton("NO", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                Log.i("Dialog yes", "Language change canceled.");
                                dialog.dismiss();
                            }
                        })
                        .create()
                        .show();
//*/
                //Toast.makeText(view.getContext(), msg, Toast.LENGTH_LONG).show();
