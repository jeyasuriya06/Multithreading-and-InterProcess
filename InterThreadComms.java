class Chat{
    boolean questionAsked = false;
    public synchronized void Question(String msg) {
        if (questionAsked) {
            try {
                wait();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        System.out.println(msg);
        questionAsked = true;
        notify();
    }

    public synchronized void Answer(String msg) {
        if (!questionAsked) {
            try {
                wait(); 
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        System.out.println(msg);
        questionAsked = false;
        notify();
    }
}

class Player1 implements Runnable {
    Chat m;
    String[] s1 = {"Hi", "How r u ?", "I'm good"};

    public Player1(Chat m1) {
        this.m = m1;
        new Thread(this, "Question").start();
    }

    public void run() {
        for (int i=0; i<s1.length; i++) {
            m.Question(s1[i]);
        }
    }
}

class Player2 implements Runnable {
   Chat m;
   String[] s2 = { "Hi", "I am good, what about you?", "Great!" };

   public Player2(Chat m2) {
      this.m = m2;
      new Thread(this, "Answer").start();
   }

   public void run() {
      for (int i = 0; i < s2.length; i++) {
         m.Answer(s2[i]);
      }
   }
}

public class InterThreadComms {
    public static void main(String[] args) {
        Chat m = new Chat();
        new Player1(m);
        new Player2(m);
    }
}