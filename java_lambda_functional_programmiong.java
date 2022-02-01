package lambda_example;


public class Main {
     
    /*functional interface: can have any name and a single method.
    This method has to match the parameters and return type of lambida function
    */
    interface MyLambdaFunctionalInterface {
        String process(String str);
    }
    
    public static void main(String[] args){
        System.out.println("### Defining a lambda function ###");
        MyLambdaFunctionalInterface functionToUpperCase = (s) -> s.toLowerCase();
        MyLambdaFunctionalInterface functionTruncate = (s) -> {
            byte maxSize = 24;
            return s.length() > maxSize  ? s : s.substring(0,maxSize );
        };
        final String parameter ="All we have to decide is what to do with the time that is given us";
        String lambdaOuput = functionToUpperCase.process(parameter);
        System.out.println("Output of lambda function (toUpperCase):" + lambdaOuput);
        lambdaOuput = functionTruncate.process(parameter);
        System.out.println("Output of lambda function (truncate):" + lambdaOuput);
        
        System.out.println("### Evaluating passing as function as parameter ###");
        methodWithParametrizedFunction(functionToUpperCase);
        methodWithParametrizedFunction(functionTruncate);
    }
    
    public static void methodWithParametrizedFunction(MyLambdaFunctionalInterface function){
        final String parameter = "It is a good day to be happy";
        String output = function.process(parameter);
        System.out.println("Output lambda functional passed as parameter: "+output);
    }
    
}
