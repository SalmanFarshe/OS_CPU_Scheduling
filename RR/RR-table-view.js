function findWaitingTime(processes, n, bt, wt, quantum) {
  let rem_bt = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    rem_bt[i] = bt[i];
  }

  let t = 0;

  while (true) {
    let done = true;

    for (let i = 0; i < n; i++) {
      if (rem_bt[i] > 0) {
        done = false;

        if (rem_bt[i] > quantum) {
          t += quantum;
          rem_bt[i] -= quantum;
        } else {
          t = t + rem_bt[i];
          wt[i] = t - bt[i];
          rem_bt[i] = 0;
        }
      }
    }

    if (done) {
      break;
    }
  }
}

function findTurnAroundTime(processes, n, bt, wt, tat) {
  for (let i = 0; i < n; i++) {
    tat[i] = bt[i] + wt[i];
  }
}

function findAvgTime(processes, n, bt, quantum) {
  let wt = new Array(n).fill(0),
    tat = new Array(n).fill(0);
  let total_wt = 0,
    total_tat = 0;

  findWaitingTime(processes, n, bt, wt, quantum);
  findTurnAroundTime(processes, n, bt, wt, tat);

  let data = [];
  for (let i = 0; i < n; i++) {
    total_wt += wt[i];
    total_tat += tat[i];
    data.push({
      Process: processes[i],
      "Burst time": bt[i],
      "Waiting time": wt[i],
      "Turn around time": tat[i],
    });
  }

  console.table(data);
  console.log(`Average waiting time = ${total_wt / n}`);
  console.log(`Average turn around time = ${total_tat / n}`);
}

let processes = [1, 2, 3];
let n = processes.length;
let burst_time = [10, 5, 8];
let quantum = 2;

findAvgTime(processes, n, burst_time, quantum);
