@RequestMapping(value="/update_author/{id}/{first_name}", produces = { "application/json" })
	@Transactional
	public ResponseEntity update(@PathVariable(value="first_name") String firstName, @PathVariable(value="id") Long id ) {
		String queryStr="update actor  set first_name =? where actor_id=?";		
		int result=-1;
		Query query=entityManager.createNativeQuery(queryStr);
	    query.setParameter(1, firstName);
	    query.setParameter(2, id);
	    result=query.executeUpdate();
	    if(result==0) {
	    	return new ResponseEntity(HttpStatus.);
	    }
		return new ResponseEntity(HttpStatus.OK);
	}
