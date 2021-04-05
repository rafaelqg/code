/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package example.oo.main;


public class RepeatStructure {
    
    public static void main(String args[]){
        //array declaration
        float[] unidimensionalVariable= {5.6f, 7.8f, 6.4f, 4.3f, 7.2f};
        
        byte i=0;
        while(i<unidimensionalVariable.length){
            System.out.println("WHILE: Element at index "+ i +" is "+unidimensionalVariable[i]);  
            i++;
        }
        
        i=0;
        do{
            System.out.println("DO-WHILE: Element at index "+ i +" is "+unidimensionalVariable[i]); 
            i++;
        }while(i<unidimensionalVariable.length);
        
       
        //reading all elements of this array
        for(i=0;i<unidimensionalVariable.length;i++){
            System.out.println("FOR: Element at index "+ i +" is "+unidimensionalVariable[i]);         
        }
         
        //calculating sum
        float sum=0;
        for(i=0;i<unidimensionalVariable.length;i++){
            sum+=unidimensionalVariable[i];
        }
        System.out.println("The sum of all array elements is:"+ sum);
        //calculation the avarage
        float average=sum/unidimensionalVariable.length;
        System.out.println("The average of elements is:"+ average);
        
        
        float variance=0;
        i=0;
        while(i<unidimensionalVariable.length){
            float distanceFromAverage=unidimensionalVariable[i]-average;
            variance+=Math.pow(distanceFromAverage, 2);
            i++;
        }
        System.out.println("The variance of elements is:"+ variance);
        double standardDeviation=Math.sqrt(variance);
         System.out.println("The standard deviation of elements is:"+ standardDeviation);
        
    } 
}
