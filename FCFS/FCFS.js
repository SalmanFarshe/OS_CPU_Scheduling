function calculateWaitingTime(arrivalTime, burstTime, numberOfProcesses) {
  let waitingTimes = new Array(numberOfProcesses);
  waitingTimes[0] = 0;
  console.log("Process\tArrival Time\tBurst Time\tWaiting Time\n\n");
  console.log(
    `1\t\t${arrivalTime[0]}\t\t${burstTime[0]}\t\t${waitingTimes[0]}\n`
  );
  for (let i = 1; i < numberOfProcesses; i++) {
    waitingTimes[i] =
      arrivalTime[i - 1] +
      burstTime[i - 1] +
      waitingTimes[i - 1] -
      arrivalTime[i];
    console.log(
      `${i + 1}\t\t${arrivalTime[i]}\t\t${burstTime[i]}\t\t${waitingTimes[i]}\n`
    );
  }
  let averageWaitingTime;
  let sum = 0;
  for (let i = 0; i < numberOfProcesses; i++) {
    sum = sum + waitingTimes[i];
  }
  averageWaitingTime = sum / numberOfProcesses;
  console.log(`\nAverage waiting time = ${averageWaitingTime}`);
}

function main() {
  let numberOfProcesses = 5;
  let arrivalTime = [0, 1, 2, 3, 4];
  let burstTime = [4, 3, 1, 2, 5];
  calculateWaitingTime(arrivalTime, burstTime, numberOfProcesses);
}

main();
