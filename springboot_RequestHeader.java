import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActorService {
	 
	@RequestMapping("/actors")
	ResponseEntity list(@RequestHeader("accept-language") String language, @RequestHeader("User-Agent") String userAgent) {	
		System.out.println("language:"+language);
		System.out.println("user-agent:"+userAgent);
		return new ResponseEntity(HttpStatus.OK);
	}
 }
}
