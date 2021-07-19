package rafael.q.g.petri_network_examples;
import java.util.concurrent.Semaphore;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author rafael queiroz goncalves
 */

public class SemaphoreExample {
    private static Semaphore semaphore;
    private static Semaphore sinchronization;
    private static String output="";//shared variable
    
    public static void main(String[] args) throws InterruptedException{
        byte slotLimit=1;
        byte nThreads=10;
        sinchronization = new Semaphore(0);
        semaphore = new Semaphore(slotLimit);
        System.out.println("::: FORK PROCESSING :::");
        for(byte i=0;i<nThreads;i++){
            new ThreadProcessingAlpha(i).start();
        }
        
        //join point to all threads
        sinchronization.acquire(nThreads); //wait until the semaphore has "n" tokens to go on
        System.out.println("::: JOIN POINT TO ALL THREADS :::");
        System.out.println(output);
    }
    
    private static class ThreadProcessingAlpha extends Thread   {
        short threadId;
        
        public ThreadProcessingAlpha(short threadId){
            this.threadId=threadId;
        }
        @Override
        public void run(){
            try {
                System.out.println("Thread "+ threadId+" - Initiating....");
                //some particular logic

               //Thread.sleep(3000);
                
                // output+="Thread "+ threadId+" - waiting to enter in critical region\n";
                 semaphore.acquire(); // this instruction is blocking              
                synchronizedMethodWriteSharedVariable("Thread "+ threadId+" - waiting to enter in critical region\n");
               
                //critical region
                output+="CRITICAL: Thread "+ threadId+" - entering critical region\n";
                output+="CRITICAL: Thread "+ threadId+" - exiting critical region\n";
                semaphore.release();
                
                //some particular logic
                sinchronization.release();//add one permit/token to the semaphore aiming the thread join.
            } catch (InterruptedException ex) {
                Logger.getLogger(SemaphoreExample.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
    /* only one thread execute this method per time */
    private synchronized static void synchronizedMethodWriteSharedVariable(String content){
        output+=content;
    }
    

}
