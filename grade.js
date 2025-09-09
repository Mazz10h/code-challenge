const marks = 40;
// Check if marks are between 80 and 100 — Grade A
if (marks >= 79 && marks <= 100) {
  console.log("A");
  // Check if marks are between 60 and 78 — Grade B
} else if (marks >= 60 && marks < 79) {
  console.log("B");
  // Check if marks are between 49 and 59 — Grade C

} else if (marks >= 49 && marks <= 59) {
  console.log("C");
  // Check if marks are between 41 and 48 — Grade D
} else if (marks >= 40 && marks <= 49) {
  console.log("D");

// Check if marks are below 40 — Grade E
} else if (marks >= 0 && marks < 40) {
  console.log("E");
  // If the marks are outside the range of 0–100, it's invalid
} else {
  console.log("Invalid marks");
}
/**
 * This code is for grading system.
 * 
 */