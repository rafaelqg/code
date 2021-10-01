@Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_menu, menu);

        // Associate searchable configuration with the SearchView
        SearchManager searchManager = (SearchManager) getSystemService(Context.SEARCH_SERVICE);
        SearchView searchView = (SearchView) menu.findItem(R.id.app_bar_search).getActionView();
        searchView.setSearchableInfo( searchManager.getSearchableInfo(getComponentName()));
        final SearchView.OnQueryTextListener queryTextListener = new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextChange(String newText) {
                ((TextView)findViewById(R.id.textViewSearchViewText)).setText(newText);
                return true;
            }
            @Override
            public boolean onQueryTextSubmit(String query) {
                ((TextView)findViewById(R.id.textViewSearchViewText)).setText(query.toUpperCase());
                return true;
            }
        };
        searchView.setOnQueryTextListener(queryTextListener);
        return true;
    }
