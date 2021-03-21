
package example.oo.main;


public class ArithmeticOperations {
    public static void main (String args[]){
        //addition
        int sum=5+7;// two constants
        System.out.println("Sum:"+sum);
        int varIntA=12;
        sum =varIntA+3; //variable and constant
        System.out.println("Sum:"+sum);
        int varIntB=13;
        sum=varIntA+varIntB; //two variables
        System.out.println("Sum:"+sum);
        long varlongA=5;
        //sum=varlongA+varIntA;//do not work: long being assigned to an int
        long sumLong=varlongA+varIntA; //long and int being summed produced a long
        System.out.println("Sum:"+sumLong);       
         // as observed we can use addition to CONCAT strings
         String varString="Sum:"+sumLong;
         System.out.println(varString);
         
        // the same for subtraction(-), multiplication (*) and division (/) 
        System.out.println("Subtraction:"+(varIntA-varIntB));
        System.out.println("Multiplication:"+(varIntA*2));
        System.out.println("Division:"+(varIntA/2));
        int numberA= 1500000000;
        int numberB=1500000000;
        int numberC=numberA+numberB;
        long numberD=numberA+numberB;
        System.out.println("int variable: "+numberC);
        System.out.println("long variable: "+numberD);
        numberD=numberA;
        numberD+=numberB;
        System.out.println("long variable: "+numberD);
        
        //division
        numberA=39;
        numberB=4;
        numberC=numberA/numberB;
        System.out.println("Division int: "+numberC);
        float floatA=numberA/numberB;
        System.out.println("Division float with integer ops: "+floatA);
         
        float floatB=39;
        float floatC=4;
         
        floatA=floatB/floatC;
        System.out.println("Division float with float ops: "+floatA);
        //multiplication
        floatA=floatB*floatC;
        System.out.println("Multiplication output: "+floatA);
        
        //subtraction
        floatA=floatB-floatC;
        System.out.println("Subtraction output: "+floatA);
    }
}
