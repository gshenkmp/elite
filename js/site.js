// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            contactForm.classList.add('form-loading');
            
            try {
                // Get form data
                const formData = new FormData(contactForm);
                
                // For demo purposes - replace with actual form handler
                // Option 1: Formspree (replace YOUR_FORM_ID)
                // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                //     method: 'POST',
                //     body: formData,
                //     headers: {
                //         'Accept': 'application/json'
                //     }
                // });
                
                // Simulate form submission for demo
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                showFormMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
                contactForm.reset();
                
            } catch (error) {
                // Show error message
                showFormMessage('Sorry, there was an error sending your message. Please try again or call us directly.', 'error');
            } finally {
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                contactForm.classList.remove('form-loading');
            }
        });
    }
});

function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type === 'success' ? 'form-success' : 'form-error'}`;
    messageDiv.style.cssText = `
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        border: 1px solid;
        font-weight: 500;
        text-align: center;
        color: ${type === 'success' ? '#047857' : '#dc2626'};
        background: ${type === 'success' ? '#f0fdf4' : '#fef2f2'};
        border-color: ${type === 'success' ? '#bbf7d0' : '#fecaca'};
    `;
    messageDiv.textContent = message;

    // Insert after form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

        // Remove message after 10 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 10000);
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
