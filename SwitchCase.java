package example.oo.main;

import java.util.Date;

public class SwitchCase {
    
    public static void main(String args[]){
        
        Date dt= new Date();
        dt=new Date(2021,03,12,3,30); //Date(int year, int month, int date, int hrs, int min)
        byte period=0;//1- morgen, 2- afternoon, 3-evening 
        
        if(dt.getHours()>=5 && dt.getHours()<12) period=1;
        if(dt.getHours()>=12 && dt.getHours()<18) period=2;
        if(dt.getHours()>=18) period=3;
        switch(period){
            case 1:
                printMessage("Good morning");
                break;
            case 2:
                printMessage("Good afternoon");
                break;
            case 3:
                printMessage("Good evening");
                break;
            default:
                printMessage("zzz...");
        }
        
        
    }
        
    public static void printMessage(String message){
        System.out.println( message);
    }
    
}
