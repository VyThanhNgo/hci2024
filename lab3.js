function showMaterials(subject) {
    document.getElementById('materials').style.display = 'block';
    
    // Clear previous content
    document.getElementById('lecture').innerHTML = '';
    document.getElementById('exercise').innerHTML = '';
    document.getElementById('reference').innerHTML = '';

    // Define icons and PDF links
    const icons = {
        python: '🐍', // Python icon
        c: '💻',      // C icon
        java: '☕'    // Java icon
    };

    const pdfLinks = {
        python: {
            lecture: 'https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf', // Python Lecture
            exercise: 'https://www.hackinscience.org/exercises', // Python Exercises (external exercises link)
            reference: 'https://perso.limsi.fr/pointal/_media/python:cours:mementopython3-english.pdf' // Python Reference
        },
        c: {
            lecture: 'https://www.vssut.ac.in/lecture_notes/lecture1424354156.pdf', // C Lecture
            exercise: 'https://www.w3schools.com/c/c_exercises.php', // C Exercises (external exercises link)
            reference: 'https://en.wikibooks.org/wiki/C_Programming/Standard_library_reference' // C Reference
        },
        java: {
            lecture: 'https://www.tutorialspoint.com/java/java_tutorial.pdf', // Java Lecture
            exercise: 'https://www.w3schools.com/java/exercise.asp', // Java Exercises (external exercises link)
            reference: 'https://docs.oracle.com/javase/specs/jls/se8/jls8.pdf' // Java Reference
        }
    };

    // Update materials based on subject
    if (subject === 'python') {
        document.getElementById('lecture').innerHTML = `<span>${icons.python}</span><a href="${pdfLinks.python.lecture}" target="_blank">Python Lecture</a>`;
        document.getElementById('exercise').innerHTML = `<span>${icons.python}</span><a href="${pdfLinks.python.exercise}" target="_blank">Python Exercises</a>`;
        document.getElementById('reference').innerHTML = `<span>${icons.python}</span><a href="${pdfLinks.python.reference}" target="_blank">Python Reference</a>`;
    } else if (subject === 'c') {
        document.getElementById('lecture').innerHTML = `<span>${icons.c}</span><a href="${pdfLinks.c.lecture}" target="_blank">C Lecture</a>`;
        document.getElementById('exercise').innerHTML = `<span>${icons.c}</span><a href="${pdfLinks.c.exercise}" target="_blank">C Exercises</a>`;
        document.getElementById('reference').innerHTML = `<span>${icons.c}</span><a href="${pdfLinks.c.reference}" target="_blank">C Reference</a>`;
    } else if (subject === 'java') {
        document.getElementById('lecture').innerHTML = `<span>${icons.java}</span><a href="${pdfLinks.java.lecture}" target="_blank">Java Lecture</a>`;
        document.getElementById('exercise').innerHTML = `<span>${icons.java}</span><a href="${pdfLinks.java.exercise}" target="_blank">Java Exercises</a>`;
        document.getElementById('reference').innerHTML = `<span>${icons.java}</span><a href="${pdfLinks.java.reference}" target="_blank">Java Reference</a>`;
    }
}