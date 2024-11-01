// Global variables to track exercise status
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

// Function to filter exercises by language
function filterExercises() {
    const filter = document.getElementById("language-filter").value.toLowerCase();
    const exerciseElements = document.querySelectorAll(".exercise");

    exerciseElements.forEach(exercise => {
        const language = exercise.getAttribute("data-language");
        exercise.style.display = (filter === "all" || language === filter) ? "" : "none";
    });
}

// Function to search exercises by keyword
function searchExercises() {
    const keyword = document.getElementById("search-filter").value.toLowerCase();
    const exerciseElements = document.querySelectorAll(".exercise");

    exerciseElements.forEach(exercise => {
        const title = exercise.querySelector("h3").innerText.toLowerCase();
        const description = exercise.querySelector(".description").innerText.toLowerCase();
        exercise.style.display = (title.includes(keyword) || description.includes(keyword)) ? "" : "none";
    });
}

// Function to select an exercise
function selectExercise(id) {
    const exercise = exercises.find(ex => ex.id === id);
    if (exercise) {
        document.getElementById("exercise-title").innerText = exercise.title;
        document.getElementById("exercise-description").innerText = exercise.description;

        // Show predefined test cases
        const testResultsDiv = document.getElementById("test-results");
        testResultsDiv.innerHTML = "";
        exercise.testCases.forEach((testCase, index) => {
            const inputLabel = document.createElement("p");
            inputLabel.innerText = `Test Case ${index + 1}: Input = ${testCase.input}, Expected = ${testCase.expected}`;
            testResultsDiv.appendChild(inputLabel);
        });

        // Display the coding environment
        document.getElementById("coding-environment").style.display = "block";
        document.getElementById("exercise-section").style.display = "none";

        // Initialize CodeMirror for syntax highlighting
        const editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
            lineNumbers: true,
            mode: exercise.language,
            theme: "default",
            matchBrackets: true
        });

        // Load the corresponding template
        updateTemplate(exercise.language, editor);
    }
}

// Function to update the code template based on selected language
function updateTemplate(language, editor) {
    let template;
    if (language === "python") {
        template = "# Python template code here...\n";
    } else if (language === "c") {
        template = "// C template code here...\n";
    } else if (language === "java") {
        template = "// Java template code here...\n";
    }
    editor.setValue(template);
}

// Function to run the code (dummy implementation)
function runCode() {
    const output = document.getElementById("output");
    output.innerText = "Code executed successfully!"; // Placeholder for actual execution result
}

// Function to clear the code editor
function clearCode() {
    document.getElementById("code-editor").value = "";
    document.getElementById("output").innerText = "";
}

// Function to submit the code (dummy implementation)
function submitCode() {
    const output = document.getElementById("output");
    output.innerText += "\nCode submitted for grading."; // Placeholder for submission handling
    updateSubmissionResults(); // Update submission results
}

// Function to run a test case
function runTestCase() {
    const input = document.getElementById("test-input").value;
    const output = document.getElementById("test-results");
    
    // Dummy implementation: You may want to execute the code and get the result
    output.innerHTML += `<p>Test case run with input: ${input}</p>`;
}

// Function to return to the exercises
function returnToExercises() {
    document.getElementById("coding-environment").style.display = "none";
    document.getElementById("exercise-section").style.display = "block";
}

// Function to leave feedback
function leaveFeedback() {
    alert("Feedback submitted!"); // Placeholder for feedback handling
}

// Function to request a hint (dummy implementation)
function requestHint() {
    alert("Hint: Check your logic for reversing a string!"); // Placeholder for hint
}

// Function to update submission results (dummy implementation)
function updateSubmissionResults() {
    const status = "Success"; // Placeholder for actual status
    const output = document.getElementById("submission-output");
    const score = 100; // Placeholder for score calculation

    document.getElementById("submission-status").innerText = `Status: ${status}`;
    output.innerText = "Output: Code executed without issues."; // Placeholder output
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("submission-results").style.display = "block"; // Show results
}
window.onload = function() {
    showSection('course-section'); // This will show the course section on page load
};
function clearCode() {
    const editor = document.getElementById("code-editor");
    editor.value = ""; // Clear the code editor
    editor.dispatchEvent(new Event('input')); // Trigger input event for CodeMirror
    document.getElementById("output").innerText = ""; // Clear output display
    document.getElementById("submission-results").style.display = "none"; // Hide submission results
}

function submitCode() {
    const editor = document.getElementById("code-editor");
    const code = editor.value; // Get the code from the editor

    if (code.trim() === "") {
        alert("Please write some code before submitting.");
        return;
    }

    // Simulate submission process (you can replace this with actual submission logic)
    document.getElementById("submission-results").style.display = "block";
    document.getElementById("submission-status").innerText = "Submission Status: Success";

    // Simulated output (you can replace this with actual execution results)
    const simulatedOutput = `Output for your code:\n${code}\nOutput will depend on your code execution.`;
    document.getElementById("submission-output").innerText = simulatedOutput;

    // Simulated performance metrics
    document.getElementById("score").innerText = "Score: 85/100"; // Placeholder for score
    document.getElementById("time-taken").innerText = "Time Taken: 15ms";
    document.getElementById("memory-used").innerText = "Memory Used: 4MB";
}
document.getElementById("material-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const subject = document.getElementById("subject").value;
    const materialType = document.getElementById("material-type").value;
    const materialTitle = document.getElementById("material-title").value;
    const materialFile = document.getElementById("material-file").files[0];

    // Create a new material object
    const material = {
        subject,
        type: materialType,
        title: materialTitle,
        file: materialFile.name // Store the file name or a URL to the uploaded file
    };

    // Add the material to the shared materials list
    addMaterialToList(material);

    // Clear the form
    document.getElementById("material-form").reset();
});

function addMaterialToList(material) {
    const list = document.getElementById("shared-materials-list");
    const materialItem = document.createElement("div");
    materialItem.className = "material-item";
    materialItem.innerHTML = `
        <strong>${material.title}</strong> (${material.type}) - Subject: ${material.subject}
        <br>
        <a href="${material.file}" target="_blank">Download</a>
    `;
    list.appendChild(materialItem);
}
function showMaterials(subject) {
    // Hide previous materials display
    document.getElementById("materials-display").style.display = "block";
    
    // Display the selected subject
    document.getElementById("selected-subject").innerText = subject.replace(/-/g, ' ').toUpperCase();
    
    // Load content based on subject
    const materialContent = {
        'django-python': '<p>Materials related to Django Python...</p>',
        'fee': '<p>Materials related to FEE...</p>',
        'hibernate': '<p>Materials related to Hibernate...</p>',
        'java-mock-project': '<p>Materials related to Java Mock Project...</p>',
        'java-programming': '<p>Materials related to Java Programming Language...</p>',
        'java-spring': '<p>Materials related to Java Spring Framework...</p>',
    };
    
    document.getElementById("material-content").innerHTML = materialContent[subject];
}
function filterMaterials() {
    const selectedSubject = document.getElementById("subject-selector").value;
    const cards = document.querySelectorAll(".material-card");

    cards.forEach(card => {
        if (selectedSubject === "all" || card.dataset.subject === selectedSubject) {
            card.style.display = "block"; // Hiện tài liệu nếu khớp
        } else {
            card.style.display = "none"; // Ẩn tài liệu nếu không khớp
        }
    });
}
