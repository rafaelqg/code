
package example.oo.main;


public class ThreadJoin {
    public static void main(String args[]) throws InterruptedException{
         Thread t1= new Thread(){
            public void run(){
                for(byte b=0;b<100;b++){
                    System.out.println("THREAD 1: "+b);
                }
            }
        };
         Thread t2= new Thread(){
            public void run(){
                for(byte b=0;b<100;b++){
                    System.out.println("THREAD 2: "+b);
                }
            }
        };
        t1.start();
        t2.start();
         for(byte b=0;b<100;b++){
                System.out.println("MAIN THREAD: "+b);
        }
        t1.join();
        t2.join();
        System.out.println("Last instruction");
    }
}
