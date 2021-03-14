  ListView listview = (ListView) findViewById(R.id.listViewField);
        List<String> listElementsArrayList = new ArrayList<String>();
        listElementsArrayList.add("Portugues");
        listElementsArrayList.add("English");
        listElementsArrayList.add("France");
        listElementsArrayList.add("Deutsch");
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1,listElementsArrayList);
        listview.setAdapter(adapter);
