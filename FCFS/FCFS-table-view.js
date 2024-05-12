function calculateWaitingTime(arrivalTime, burstTime, numberOfProcesses) {
  let waitingTimes = new Array(numberOfProcesses);
  waitingTimes[0] = 0;
  let data = [];

  data.push({
    Process: 1,
    "Arrival Time": arrivalTime[0],
    "Burst Time": burstTime[0],
    "Waiting Time": waitingTimes[0],
  });

  for (let i = 1; i < numberOfProcesses; i++) {
    waitingTimes[i] =
      arrivalTime[i - 1] +
      burstTime[i - 1] +
      waitingTimes[i - 1] -
      arrivalTime[i];
    data.push({
      Process: i + 1,
      "Arrival Time": arrivalTime[i],
      "Burst Time": burstTime[i],
      "Waiting Time": waitingTimes[i],
    });
  }

  let sum = waitingTimes.reduce((acc, val) => acc + val, 0);
  let averageWaitingTime = sum / numberOfProcesses;

  console.table(data);
  console.log(`\nAverage waiting time = ${averageWaitingTime}`);
}

function main() {
  let numberOfProcesses = 5;
  let arrivalTime = [0, 1, 2, 3, 4];
  let burstTime = [4, 3, 1, 2, 5];
  calculateWaitingTime(arrivalTime, burstTime, numberOfProcesses);
}

main();
