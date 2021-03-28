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
        
        //reading all elements of this array
        for(byte i=0;i<unidimensionalVariable.length;i++){
            System.out.println("Element at index "+ i +" is "+unidimensionalVariable[i]);
        }
        //calculating sum
        float sum=0;
        for(byte i=0;i<unidimensionalVariable.length;i++){
            sum+=unidimensionalVariable[i];
        }
        System.out.println("The sum of all array elements is:"+ sum);
        //calculation the avarage
        float average=sum/unidimensionalVariable.length;
        System.out.println("The average of elements is:"+ average);
    } 
}
