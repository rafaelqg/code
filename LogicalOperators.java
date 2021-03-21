/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package example.oo.main;

public class LogicalOperators {
     public static void main (String args[]){
         boolean varBoo=false;
         System.out.println("Boolean constant:"+varBoo);
         varBoo=false && true;// two values has to be true, for returning true
         System.out.println("Boolean AND operator:"+varBoo);
         varBoo=false || true;// Only when of two values has to true, for returning true.
         System.out.println("Boolean OR operator:"+varBoo);
         
         varBoo=false == true;// Only true when two values are the same
         System.out.println("Boolean EQUALS operator:"+varBoo);
         
         varBoo=false != true;// Only true when two values are different.
         System.out.println("Boolean NOT EQUALS operator:"+varBoo);
         
         int varIntA=5;
         int varIntB=8;
         varBoo=varIntA  < varIntB;
         System.out.println("Boolean SMALLER THAN operator:"+varBoo);
         
         varBoo=varIntA  < varIntB;
         System.out.println("Boolean BIGGER THAN operator:"+varBoo);
         //example of if structure
         if(varBoo){
             System.out.println("The IF structure has entered:"+varBoo);
         }
         
         //example of if/else
          if(!varBoo){
             System.out.println("The IF structure has entered:"+varBoo);
          }else{
              System.out.println("The ELSE structure has entered:"+varBoo);
          }
         
       
     }
}
