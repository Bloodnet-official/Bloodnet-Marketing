// Modal toggling
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// Form submission handling
function handleFormSubmit(e, modalId, message) {
    e.preventDefault();
    closeModal(modalId);

    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    toastMsg.innerText = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);

    e.target.reset();
}

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
