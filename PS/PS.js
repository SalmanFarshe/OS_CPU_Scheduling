function priorityScheduling(processes, n, burstTime, priority) {
  let waitingTime = new Array(n).fill(0);
  let turnaroundTime = new Array(n).fill(0);

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (priority[j] > priority[j + 1]) {
        let temp = priority[j];
        priority[j] = priority[j + 1];
        priority[j + 1] = temp;

        temp = burstTime[j];
        burstTime[j] = burstTime[j + 1];
        burstTime[j + 1] = temp;

        temp = processes[j];
        processes[j] = processes[j + 1];
        processes[j + 1] = temp;
      }
    }
  }

  waitingTime[0] = 0;
  for (let i = 1; i < n; i++) {
    waitingTime[i] = waitingTime[i - 1] + burstTime[i - 1];
  }

  for (let i = 0; i < n; i++) {
    turnaroundTime[i] = waitingTime[i] + burstTime[i];
  }

  let totalWaitingTime = waitingTime.reduce((acc, val) => acc + val, 0);
  let totalTurnaroundTime = turnaroundTime.reduce((acc, val) => acc + val, 0);

  let avgWaitingTime = totalWaitingTime / n;
  let avgTurnaroundTime = totalTurnaroundTime / n;

  console.log("Process\tBurst Time\tPriority\tWaiting Time\tTurnaround Time");
  for (let i = 0; i < n; i++) {
    console.log(
      `${processes[i]}\t\t${burstTime[i]}\t\t${priority[i]}\t\t${waitingTime[i]}\t\t${turnaroundTime[i]}`
    );
  }
  console.log(`Average Waiting Time: ${avgWaitingTime}`);
  console.log(`Average Turnaround Time: ${avgTurnaroundTime}`);
}

let processes = [1, 2, 3, 4, 5];
let n = processes.length;
let burstTime = [7, 4, 1, 4, 5];
let priority = [3, 4, 1, 2, 5];

priorityScheduling(processes, n, burstTime, priority);
