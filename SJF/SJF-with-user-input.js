let processes = [];
let total = 0;
let index, temp;
let avgWaitingTime, avgTurnaroundTime;
let numberOfProcesses = prompt("Enter the number of processes: ");

for (let i = 0; i < numberOfProcesses; i++) {
  let input = prompt("P" + (i + 1) + ": ");
  processes.push([i + 1, parseInt(input)]);
}

for (let i = 0; i < numberOfProcesses; i++) {
  index = i;
  for (let j = i + 1; j < numberOfProcesses; j++) {
    if (processes[j][1] < processes[index][1]) {
      index = j;
    }
  }
  temp = processes[i][1];
  processes[i][1] = processes[index][1];
  processes[index][1] = temp;

  temp = processes[i][0];
  processes[i][0] = processes[index][0];
  processes[index][0] = temp;
}

processes[0][2] = 0;
for (let i = 1; i < numberOfProcesses; i++) {
  processes[i][2] = 0;
  for (let j = 0; j < i; j++) {
    processes[i][2] += processes[j][1];
  }
  total += processes[i][2];
}

avgWaitingTime = total / numberOfProcesses;
total = 0;
console.log("P	BT	WT	TAT");
for (let i = 0; i < numberOfProcesses; i++) {
  processes[i][3] = processes[i][1] + processes[i][2];
  total += processes[i][3];
  console.log(
    "P" +
      processes[i][0] +
      "	 " +
      processes[i][1] +
      "	 " +
      processes[i][2] +
      "	 " +
      processes[i][3]
  );
}

avgTurnaroundTime = total / numberOfProcesses;
console.log("Average Waiting Time= " + avgWaitingTime);
console.log("Average Turnaround Time= " + avgTurnaroundTime);
