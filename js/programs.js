// Program details data
const programDetails = {
    'basic-literacy': {
        title: 'Basic Literacy Program',
        description: 'A comprehensive program designed for absolute beginners.',
        fullDescription: 'This program focuses on building fundamental reading, writing, and mathematics skills. Perfect for those who never had the opportunity to attend school or need to strengthen their basics.',
        duration: '3 months',
        schedule: 'Monday, Wednesday, Friday - 2 hours/day',
        prerequisites: 'None - Open to all',
        certificate: 'Yes - Basic Literacy Certificate',
        curriculum: [
            'Alphabet and phonics',
            'Basic reading comprehension',
            'Writing sentences and paragraphs',
            'Addition and subtraction',
            'Multiplication and division basics',
            'Practical math for daily life'
        ]
    },
    'digital-skills': {
        title: 'Digital Skills Program',
        description: 'Essential computer and internet skills for the modern world.',
        fullDescription: 'Learn how to use computers, navigate the internet safely, and use essential software for work and daily life.',
        duration: '6 months',
        schedule: 'Tuesday, Thursday, Saturday - 3 hours/day',
        prerequisites: 'Basic literacy recommended',
        certificate: 'Yes - Digital Literacy Certificate',
        curriculum: [
            'Computer hardware basics',
            'Windows/OS navigation',
            'Microsoft Word, Excel, PowerPoint',
            'Internet browsing and email',
            'Online safety and security',
            'Introduction to social media'
        ]
    },
    'vocational': {
        title: 'Vocational Training Program',
        description: 'Practical skills for employment and entrepreneurship.',
        fullDescription: 'Hands-on training in various trades to prepare students for employment or starting their own business.',
        duration: '8 months',
        schedule: 'Monday to Friday - 4 hours/day',
        prerequisites: 'Age 16+',
        certificate: 'Yes - Vocational Certificate',
        curriculum: [
            'Carpentry and woodworking',
            'Tailoring and fashion design',
            'Sustainable farming techniques',
            'Small business management',
            'Customer service skills',
            'Basic accounting'
        ]
    },
    'stem': {
        title: 'STEM Education Program',
        description: 'Science, Technology, Engineering, and Mathematics.',
        fullDescription: 'Advanced program for students interested in technology and science careers. Includes hands-on projects and experiments.',
        duration: '12 months',
        schedule: 'Monday to Friday - 4 hours/day',
        prerequisites: 'Basic literacy and numeracy',
        certificate: 'Yes - STEM Certificate',
        curriculum: [
            'Introduction to programming (Python)',
            'Basic electronics',
            'Mathematics for technology',
            'Science experiments',
            'Robotics basics',
            'Problem-solving and critical thinking'
        ]
    },
    'english': {
        title: 'English Language Program',
        description: 'English language skills for better opportunities.',
        fullDescription: 'Improve your English speaking, reading, and writing skills for education and employment.',
        duration: '4 months',
        schedule: 'Monday, Wednesday, Friday - 2 hours/day',
        prerequisites: 'None',
        certificate: 'Yes - English Proficiency Certificate',
        curriculum: [
            'English grammar basics',
            'Vocabulary building',
            'Speaking and pronunciation',
            'Reading comprehension',
            'Writing emails and letters',
            'Business English'
        ]
    },
    'financial': {
        title: 'Financial Literacy Program',
        description: 'Essential money management skills.',
        fullDescription: 'Learn how to manage money, create budgets, save effectively, and understand basic financial concepts.',
        duration: '2 months',
        schedule: 'Saturdays - 3 hours/day',
        prerequisites: 'Basic math skills',
        certificate: 'Yes - Financial Literacy Certificate',
        curriculum: [
            'Budgeting basics',
            'Saving strategies',
            'Banking fundamentals',
            'Understanding credit and debt',
            'Small business finance',
            'Financial goal setting'
        ]
    }
};

// Show program details in modal
function showProgramDetails(programId) {
    const program = programDetails[programId];
    const modal = document.getElementById('programModal');
    const modalContent = document.getElementById('modalContent');
    
    if (program) {
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
            </div>
            
            <h3>What You'll Learn:</h3>
            <ul class="modal-curriculum">
                ${program.curriculum.map(item => `<li>✓ ${item}</li>`).join('')}
            </ul>
            
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="closeModal(); window.location.href='contacts.html'">Enroll Now</button>
                <button class="btn btn-outline" onclick="closeModal()">Close</button>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('programModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('programModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! Updates will be sent to ${email}`);
        newsletterForm.reset();
    });
}