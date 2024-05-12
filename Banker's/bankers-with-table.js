let numProcesses, numResources, processIndex, resourceIndex, iterationIndex;
numProcesses = 5;
numResources = 3;
let allocationMatrix = [
  [0, 1, 0],
  [2, 0, 0],
  [3, 0, 2],
  [2, 1, 1],
  [0, 0, 2],
];
let maxMatrix = [
  [7, 5, 3],
  [3, 2, 2],
  [9, 0, 2],
  [2, 2, 2],
  [4, 3, 3],
];
let availableResources = [3, 3, 2];
let finishArray = [];
let safeSequence = [];
for (processIndex = 0; processIndex < numProcesses; processIndex++) {
  finishArray[processIndex] = false;
}
let needMatrix = [];
for (processIndex = 0; processIndex < numProcesses; processIndex++) {
  let processNeed = [];
  for (resourceIndex = 0; resourceIndex < numResources; resourceIndex++) {
    processNeed.push(
      maxMatrix[processIndex][resourceIndex] -
        allocationMatrix[processIndex][resourceIndex]
    );
  }
  needMatrix.push(processNeed);
}
for (iterationIndex = 0; iterationIndex < numProcesses; iterationIndex++) {
  for (processIndex = 0; processIndex < numProcesses; processIndex++) {
    if (!finishArray[processIndex]) {
      let resourceFlag = true;
      for (resourceIndex = 0; resourceIndex < numResources; resourceIndex++) {
        if (
          needMatrix[processIndex][resourceIndex] >
          availableResources[resourceIndex]
        ) {
          resourceFlag = false;
          break;
        }
      }
      if (resourceFlag) {
        safeSequence.push(processIndex);
        for (resourceIndex = 0; resourceIndex < numResources; resourceIndex++) {
          availableResources[resourceIndex] +=
            allocationMatrix[processIndex][resourceIndex];
        }
        finishArray[processIndex] = true;
      }
    }
  }
}
console.log("Following is the SAFE Sequence:");
let sequenceString = "";
for (processIndex = 0; processIndex < numProcesses - 1; processIndex++) {
  sequenceString += "P" + safeSequence[processIndex] + " -> ";
}
sequenceString += "P" + safeSequence[numProcesses - 1];
console.log(sequenceString);

console.log("Final Table:");
let tableData = [];
for (processIndex = 0; processIndex < numProcesses; processIndex++) {
  let processRow = {};
  processRow.Process = "P" + processIndex;
  processRow.Allocation = allocationMatrix[processIndex].join(" ");
  processRow.Max = maxMatrix[processIndex].join(" ");
  processRow.Available = availableResources.join(" ");
  tableData.push(processRow);
}
console.table(tableData);
