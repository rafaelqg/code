
package example.oo.main;


public class PrimitiveDataTypes {
    
    public static void main (String[] args){
        byte varByte =127; //8 bits, From +127 to -128
        char varChar='A'; //16 bits (unsigned), all unicode chars
        ///char varCharNegative=-1;
        char varChar1=65;
        short varShort=32456; //16 bits (signed), From +32,767 to -32,768,
        int varInt=65000; // 32 bits, From +2,147,483,647 to -2,147,483,648, //ex. 15000000000
        long varLong = 1234566; // 64 bits, From +9,223,372,036,854,775,807 to -9,223,372,036,854,775,808
        float varFloat = 126.50f; //32 bits , From 3.402,823,5 E+38 to 1.4 E-4
        double varDouble= 1234567.25; //64 bits , From 1.797,693,134,862,315,7 E+308 to 4.9 E-324
        boolean varBoolean =true;
        
        //print variables values
        System.out.println("Byte variable: "+varByte);
        System.out.println("Char variable: "+varChar);
        System.out.println("Char variable: "+varChar1);
        System.out.println("Short variable: "+varShort);
        System.out.println("Int varibale: "+ varInt);
        System.out.println("Long variable: "+varLong);
        System.out.println("Float variable: "+varFloat);
        System.out.println("Double variable: "+varDouble);
        System.out.println("Boolean variable: "+varBoolean);
    }
}
