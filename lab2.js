  // Exercise data
  const exercises = [
    {
        id: 1,
        title: "Reverse a String",
        description: "Write a program to reverse a given string.",
        language: "python",
        testCases: [
            { input: "hello", expected: "olleh" },
            { input: "world", expected: "dlrow" }
        ]
    },
    {
        id: 2,
        title: "Find the Factorial",
        description: "Calculate the factorial of a number.",
        language: "c",
        testCases: [
            { input: "5", expected: "120" },
            { input: "0", expected: "1" }
        ]
    },
    {
        id: 3,
        title: "Binary Search",
        description: "Implement a binary search algorithm.",
        language: "java",
        testCases: [
            { input: "[1, 2, 3, 4, 5], 3", expected: "2" },
            { input: "[1, 2, 3, 4, 5], 6", expected: "-1" }
        ]
    }
];

function startExercise(exerciseId) {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    // Hide the exercise list and show the selected exercise content
    document.getElementById("exercise-section").style.display = "none";
    document.getElementById("exercise-content").style.display = "block";
    document.getElementById("exercise-title").innerText = exercise.title;
    document.getElementById("exercise-description").innerText = exercise.description;
    document.getElementById("code-editor").value = ''; // Clear any previous code
}

function backToExercises() {
    // Show the exercise list again and hide the exercise content
    document.getElementById("exercise-section").style.display = "block";
    document.getElementById("exercise-content").style.display = "none";
}

function runCode() {
    // Implement code running logic here
    const code = document.getElementById("code-editor").value;
    document.getElementById("output").innerText = "Running the code...";
}

function clearCode() {
    document.getElementById("code-editor").value = '';
}

function submitCode() {
    // Implement code submission logic here
}

function runTestCase() {
    const testInput = document.getElementById("test-input").value;
    const testResult = "Output: " + testInput;  // Example logic for testing
    document.getElementById("test-results").innerText = testResult;
}

function updateEditor() {
    // Implement template update for different languages (you can pre-load default templates)
}