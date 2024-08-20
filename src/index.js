import './styles.css';
import { Task, createTaskCard, updateTaskCard, appendCardToCategory } from './tasks';
import { saveTaskToLocalStorage, loadTasksFromLocalStorage } from './storage';
import { openModal, closeModal, handleOutsideClick } from './modal';
import { applyFilter } from './filter';
import './darkMode'; // Import the dark mode module

const form = document.getElementById('taskForm');

// Modal Popup
window.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const filterBtn = document.getElementById('filter');
    const filterModal = document.getElementById('filterModal');
    const closeFilterBtn = filterModal.querySelector('.close');
    const filterForm = document.getElementById('filterForm');

    // Ensure modal is hidden on page load
    closeModal(modal);

    // Load tasks from localStorage and render them
    const tasks = loadTasksFromLocalStorage();
    tasks.forEach(task => {
        const card = createTaskCard(task);
        appendCardToCategory(task, card);
    });

    addBtn.addEventListener('click', () => openModal(modal));

    closeBtn.addEventListener('click', () => closeModal(modal));

    window.addEventListener('click', (event) => handleOutsideClick(event, modal));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        // Ensure all required fields are filled
        const requiredFields = ['taskProject', 'taskTitle', 'taskDescription', 'taskDueDate', 'taskPriority', 'taskStatus'];
        let valid = true;
    
        requiredFields.forEach((id) => {
            const field = document.getElementById(id);
            if (!field.value) {
                field.classList.add('invalid');
                valid = false;
            } else {
                field.classList.remove('invalid');
            }
        });
    
        if (!valid) {
            alert('Please fill in all required fields.');
            return;
        }
    
        // Proceed with form submission
        const isEditing = form.getAttribute('data-editing') === 'true';
        const card = document.querySelector(`[data-editing-card="true"]`);
        const project = document.getElementById('taskProject').value;
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;
        const status = document.getElementById('taskStatus').value;
        const notes = document.getElementById('taskNotes').value;
    
        if (isEditing && card) {
            const task = new Task(project, title, description, dueDate, priority, status, notes);
            updateTaskCard(task, card);
        } else {
            const task = new Task(project, title, description, dueDate, priority, status, notes);
            saveTaskToLocalStorage(task);
            const card = createTaskCard(task);
            appendCardToCategory(task, card);
        }
    
        form.reset();
        closeModal(modal);
        form.removeAttribute('data-editing');
        document.querySelectorAll('.todo-card').forEach(c => c.removeAttribute('data-editing-card'));
    });

    // Filter Modal Functionality
    filterBtn.addEventListener('click', () => {
        filterModal.style.display = 'flex';
    });

    closeFilterBtn.addEventListener('click', () => {
        filterModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === filterModal) {
            filterModal.style.display = 'none';
        }
    });

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const checkedPriorities = Array.from(filterForm.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
        applyFilter(checkedPriorities);
        filterModal.style.display = 'none';
    });
});
