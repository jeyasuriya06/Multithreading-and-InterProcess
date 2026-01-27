class PriorityDemo extends Thread {

    public PriorityDemo(String name, int priority) {
        setName(name);
        setPriority(priority);
    }
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " running");
        }
    }

    public static void main(String[] args) {
        PriorityDemo t1 = new PriorityDemo("Low Priority Thread",
                Thread.MIN_PRIORITY);

        PriorityDemo t2 = new PriorityDemo("Normal Priority Thread",
                Thread.NORM_PRIORITY);

        PriorityDemo t3 = new PriorityDemo("High Priority Thread",
                Thread.MAX_PRIORITY);

        t1.start();
        t2.start();
        t3.start();
    }
}