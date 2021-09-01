// component HTML
<ion-header>
  <ion-toolbar>
      <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      IONIC APP
    </ion-title>
  </ion-toolbar>
</ion-header>



//app.component.html
<ion-app>
  <ion-menu side="start" menuId="first" contentId="main" >
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Authentication</ion-title>
      </ion-toolbar>
    </ion-header> 
    <ion-content>
      <ion-list>
        <ion-item href="/">Authenticate</ion-item>
        <ion-item href="/register">Register</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  

  
   <ion-router-outlet id="main"></ion-router-outlet>
</ion-app>
