package spring_boot_project_artefact_id;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.Table;
import javax.persistence.Tuple;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Service {
			
	@PersistenceContext
	private EntityManager entityManager;

	private ResponseEntity buildResponseEntitySuccess(Object result) {
		HttpHeaders responseHeaders = new HttpHeaders();
	    responseHeaders.set("Access-Control-Allow-Origin","*");
	    responseHeaders.set("Access-Control-Allow-Credentials", "true");
	    responseHeaders.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
	    responseHeaders.set("Access-Control-Max-Age", "3600");
	    responseHeaders.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
        return 	 new ResponseEntity(result, responseHeaders, HttpStatus.OK);	
	}

	@RequestMapping(value="/url/{param}", produces = { "application/json" },method=RequestMethod.POST)
	@Transactional
	public ResponseEntity atualizaSigilo(@PathVariable(value="param") Long id) {
		String queryStr="select * from sometable where id=?";		
		int result=-1;
		try{
			Query query=entityManager.createNativeQuery(queryStr);
		    query.setParameter(1, id);
		    result=query.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return this.buildResponseEntitySuccess(new Integer(result));
	}		
}
