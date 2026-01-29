#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <unistd.h>

int main() {
    int key = 1234;
    int shmid;
    int *score;

    // Get shared memory
    shmid = shmget(key, sizeof(int), 0666);

    // Attach shared memory
    score = (int *) shmat(shmid, NULL, 0);

    // Read score
    for (int i = 1; i <= 5; i++) {
        printf("Display Process: Current score = %d\n", *score);
        sleep(1);
    }

    // Detach shared memory
    shmdt(score);

    // Remove shared memory
    shmctl(shmid, IPC_RMID, NULL);

    return 0;
}
