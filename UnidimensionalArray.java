/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package example.oo.main;

public class UnidimensionalArray {
    
    
    public static void main (String args[]){
        //declaration
        int[] myArray=new int[5];//non initiated
        byte[] myAnotherArray={19,31,-3,4,6};//already initiated
        
        //modifing elements on array
        myArray[0]=43;
        myArray[2]=9;
        myArray[4]=13;
        //myArray[5]=43;//error: array index begins in 0, so if 5 elements, starts with 0 and ends with 4
        myAnotherArray[1]=34;
        
        //reading array entries
        System.out.println("my array at index 2:"+myArray[2]);
        System.out.println("my another array at index 3:"+myAnotherArray[3]);
        
        //accessing array length
       System.out.println("Length:"+myArray.length);
    }
}
