class CookingTask extends Thread {
    private final String food;

    CookingTask(String food) {
        this.food = food;
    }
    @Override
    public void run() {
        System.out.println(food + "is being prepared by" + Thread.currentThread().getName());
    }
}

class CookingJob implements Runnable {
    private final String task;

    CookingJob(String task) {
        this.task = task;
    }
    @Override
    public void run() {
        System.out.println(task + " is being prepared by " +
            Thread.currentThread().getName());
    }
}

public class Restaurant {
    public static void main(String[] args) {
        Thread t1 = new Thread(new CookingJob("Chicken"));
        Thread t2 = new Thread(new CookingJob("Eggs"));
        Thread t3 = new Thread(new CookingTask("Dosa"));

        t1.start();
        t2.start();
        t3.start();

    }
}