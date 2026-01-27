import java.util.concurrent.Semaphore;

class Worker extends Thread {
    private static final Semaphore semaphore = new Semaphore(2);

    public Worker(String name) {
        super(name);
    }
    @Override
    public void run() {
        try {
            System.out.println(getName() + " waiting for permit");
            semaphore.acquire();   // wait (P)

            System.out.println(getName() + " acquired permit");
            Thread.sleep(2000);    // critical section

        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            semaphore.release();  // signal (V)
            System.out.println(getName() + " released permit");
        }
    }
}

public class SemaphoreDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            new Worker("Thread-" + i).start();
        }
    }
}

