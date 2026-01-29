#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <unistd.h>

int main() {
    int key = 1234;
    int shmid;
    int *score;

    // Create shared memory
    shmid = shmget(key, sizeof(int), IPC_CREAT | 0666);

    // Attach shared memory
    score = (int *) shmat(shmid, NULL, 0);

    // Update score
    for (int i = 1; i <= 5; i++) {
        *score = i * 10;
        printf("Game Process: Score updated to %d\n", *score);
        sleep(1);
    }

    // Detach shared memory
    shmdt(score);

    return 0;
}
