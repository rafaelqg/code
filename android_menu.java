protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
}

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return true;
    }

 @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        String title=item.getTitle().toString();
        Intent myIntent=null;
        switch (item.getItemId()){
            case R.id.menu_item_B:
                final String URI="https://developer.android.com?p1=1";
            
                break;
            case R.id.menu_item_A:
                myIntent = new Intent(getBaseContext(), InputsExample.class);
                startActivity(myIntent);
                break;
            default:
        }

            return super.onOptionsItemSelected(item);
        }

<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">


    <item
        android:id="@+id/menu_item_A"
        android:icon="@android:drawable/ic_menu_preferences"
        android:title="@string/config" />
    <item
        android:id="@+id/menu_item_B"
        android:title="@string/about" ></item>

    <item android:title="Shortcuts">
        <menu>
            <item
                android:id="@+id/menu_shortcut_luke"
                android:title="Luke" />
            <item
                android:id="@+id/menu_shortcut_obi_wan"
                android:title="Obi-wan" />
        </menu>
    </item>

</menu>
