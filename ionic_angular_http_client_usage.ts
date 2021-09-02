===== file: app.module.ts ======
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [HttpClientModule],
  providers: [],
  bootstrap: [],
})

===== component .ts file ======
import { HttpClient } from '@angular/common/http';

constructor(private httpClient: HttpClient) { 
  this.loadDataFromHTTPRequest();
}

private loadDataFromHTTPRequest(){
  let object = this.httpClient.get('http://127.0.0.1:5500/messages.json');
  object.subscribe(data => {
    console.log('my data: ', data);
  })
}