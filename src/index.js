import './styles.css'
import Task from './tasks'

// Modal Popup
window.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');

    // Ensure modal is hidden on page load
    modal.style.display = 'none';

    addBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
