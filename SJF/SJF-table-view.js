let processes = [
  { id: 1, burstTime: 10 },
  { id: 2, burstTime: 5 },
  { id: 3, burstTime: 8 },
];
let total = 0;
let index, temp;
let avgWaitingTime, avgTurnaroundTime;
let numberOfProcesses = processes.length;

for (let i = 0; i < numberOfProcesses; i++) {
  index = i;
  for (let j = i + 1; j < numberOfProcesses; j++) {
    if (processes[j].burstTime < processes[index].burstTime) {
      index = j;
    }
  }
  temp = processes[i].burstTime;
  processes[i].burstTime = processes[index].burstTime;
  processes[index].burstTime = temp;

  temp = processes[i].id;
  processes[i].id = processes[index].id;
  processes[index].id = temp;
}

processes[0].waitingTime = 0;
for (let i = 1; i < numberOfProcesses; i++) {
  processes[i].waitingTime = 0;
  for (let j = 0; j < i; j++) {
    processes[i].waitingTime += processes[j].burstTime;
  }
  total += processes[i].waitingTime;
}

avgWaitingTime = total / numberOfProcesses;
total = 0;

console.log("Process table:");
console.table(processes, ["id", "burstTime", "waitingTime"]);

for (let i = 0; i < numberOfProcesses; i++) {
  processes[i].turnaroundTime =
    processes[i].burstTime + processes[i].waitingTime;
  total += processes[i].turnaroundTime;
}

avgTurnaroundTime = total / numberOfProcesses;
console.log("Average Waiting Time= " + avgWaitingTime);
console.log("Average Turnaround Time= " + avgTurnaroundTime);
