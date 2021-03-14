
package example.oo.main;


public class ArithmeticOperations {
    public static void main (String args[]){
        //sum
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
