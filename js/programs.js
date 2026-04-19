function showProgramDetails(programId) {
    const program = programDetails[programId];
    const modal = document.getElementById('programModal');
    const modalContent = document.getElementById('modalContent');
    
    if (program) {
        // Fix: Added missing closing backtick and ensured proper HTML structure
        modalContent.innerHTML = `
            <h2>${program.title}</h2>
            <p class="modal-description">${program.description}</p>
            <p>${program.fullDescription}</p>
            
            <div class="modal-details">
                <div class="detail-item">
                    <strong>Duration:</strong> ${program.duration} 
                </div>
                <div class="detail-item">
                    <strong>Schedule:</strong> ${program.schedule}
                </div>
                <div class="detail-item">
                    <strong>Prerequisites:</strong> ${program.prerequisites}
                </div>
                <div class="detail-item">
                    <strong>Certificate:</strong> ${program.certificate}
                </div>
            </div>`; 
        
        // Fix: You must set display to 'block' to actually see the modal
        modal.style.display = 'block'; 
    }
} // Fix: Added missing closing brace

function closeModal() {
    const modal = document.getElementById('programModal');
    modal.style.display = 'none';
}

// Ensure the 'x' button in your HTML actually calls closeModal()
document.querySelector('.close-modal')?.addEventListener('click', closeModal);

window.onclick = function(event) {
    const modal = document.getElementById('programModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}