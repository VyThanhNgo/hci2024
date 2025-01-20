function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    
    // Remove active class from all nav links
    document.querySelectorAll("header nav a").forEach(link => {
        link.classList.remove("active");
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
    
    // Add active class to the clicked nav link
    document.querySelector(`header nav a[data-section="${sectionId}"]`).classList.add("active");
    
    }