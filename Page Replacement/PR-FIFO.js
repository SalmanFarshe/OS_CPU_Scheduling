function pageHitsAndFaults(pages, n, capacity) {
  let s = new Set();
  let indexes = [];
  let steps = [];

  let page_hits = 0;
  let page_faults = 0;

  for (let i = 0; i < n; i++) {
    let stepData = {
      Step: i + 1,
      Page: pages[i],
      MemoryState: "",
    };

    if (s.has(pages[i])) {
      page_hits++;
      stepData.MemoryState = Array.from(s).join(", ");
    } else {
      if (s.size < capacity) {
        s.add(pages[i]);
        page_faults++;
        indexes.push(pages[i]);
        stepData.MemoryState = Array.from(s).join(", ");
      } else {
        let val = indexes[0];
        indexes.shift();
        s.delete(val);
        s.add(pages[i]);
        indexes.push(pages[i]);
        page_faults++;
        stepData.MemoryState = Array.from(s).join(", ");
      }
    }

    steps.push(stepData);
  }

  let total_accesses = page_hits + page_faults;

  console.log("Step   Page   Memory State");
  steps.forEach((step) => {
    console.log(`${step.Step}      ${step.Page}        ${step.MemoryState}`);
  });

  console.log(`\nTotal Pages: ${total_accesses}`);
  console.log(`Page Hits: ${page_hits}`);
  console.log(`Page Faults: ${page_faults}`);
}

let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
let capacity = 4;

pageHitsAndFaults(pages, pages.length, capacity);
