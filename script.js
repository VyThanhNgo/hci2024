function showSection(sectionId) {
    // Ẩn tất cả các phần
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.style.display = 'none');
    
    // Hiển thị phần được chỉ định
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
