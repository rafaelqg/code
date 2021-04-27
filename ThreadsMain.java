
package example.oo.main;

public class ThreadsMain {
    
    public static class ThreadA extends Thread{
        private byte parameterA;
        private byte parameterB;
        @Override
        public void run(){
                System.out.println("Running thread A (A - B): A="+ parameterA+" B=" +parameterB +" Result=" +(this.parameterA-this.parameterB ));
        }

        public byte getParameterA() {
            return parameterA;
        }

        public void setParameterA(byte parameterA) {
            this.parameterA = parameterA;
        }

        public byte getParameterB() {
            return parameterB;
        }

        public void setParameterB(byte parameterB) {
            this.parameterB = parameterB;
        }
        
        
    }
    
    public static class ThreadB extends Thread{
        private byte parameterA;
        private byte parameterB;
        @Override
        public void run(){
                System.out.println("Running thread B (A + B): A="+ parameterA+" B=" +parameterB +" Result=" +(this.parameterA+this.parameterB ));
        }

        public byte getParameterA() {
            return parameterA;
        }

        public void setParameterA(byte parameterA) {
            this.parameterA = parameterA;
        }

        public byte getParameterB() {
            return parameterB;
        }

        public void setParameterB(byte parameterB) {
            this.parameterB = parameterB;
        }
        
        
    }
    
    public static class RunnableC implements Runnable{
        private byte parameterA;
        private byte parameterB;
        @Override
        public void run() {
                System.out.println("Running thread C (A * B): A="+ parameterA+" B=" +parameterB +" Result=" +(this.parameterA*this.parameterB ));
        }

        public byte getParameterA() {
            return parameterA;
        }

        public void setParameterA(byte parameterA) {
            this.parameterA = parameterA;
        }

        public byte getParameterB() {
            return parameterB;
        }

        public void setParameterB(byte parameterB) {
            this.parameterB = parameterB;
        }
              
    }
    
    
    public static void main(String[] args){
        for(byte i=0;i<99;i++){
            ThreadA a= new ThreadA();
            byte pA=1;
            a.setParameterA(i);
            a.setParameterB(pA); 
            a.start();
           
            ThreadB b= new ThreadB();
            pA=2;
            b.setParameterA(i);
            b.setParameterB(pA); 
            b.start();
           
            RunnableC c= new RunnableC();
            pA=3;
            c.setParameterA(i);
            c.setParameterB(pA); 
            new Thread(c).start();

        }
    }
    
    
}
