import './styles.css';
import Task from './tasks';
import { saveTaskToLocalStorage, loadTasksFromLocalStorage } from './storage';
import { openModal, closeModal, handleOutsideClick } from './modal';

const form = document.getElementById('taskForm');

// Modal Popup
window.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');

    // Ensure modal is hidden on page load
    closeModal(modal);

    addBtn.addEventListener('click', () => openModal(modal));

    closeBtn.addEventListener('click', () => closeModal(modal));

    window.addEventListener('click', (event) => handleOutsideClick(event, modal));

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const isEditing = form.getAttribute('data-editing') === 'true';
        const card = document.querySelector(`[data-editing-card="true"]`);

        // Capture form data
        const project = document.getElementById('taskProject').value;
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;
        const status = document.getElementById('taskStatus').value;
        const notes = document.getElementById('taskNotes').value;

        if (isEditing && card) {
            // Update the existing task card
            const task = new Task(project, title, description, dueDate, priority, status, notes);
            updateTaskCard(task, card);
        } else {
            // Create a new task card as usual
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
});

function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('todo-card');
    card.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p><strong>Due:</strong> ${task.dueDate}</p>
        <p><strong>Priority:</strong> ${task.priority}</p>
        <p><strong>Status:</strong> ${task.taskStatus}</p>
        <button class="edit-btn"><i class='bx bx-edit'></i></button>
    `;

    const editBtn = card.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        openEditModal(task, card, form);
    });

    return card;
}

function openEditModal(task, card) {
    const modal = document.getElementById('myModal');
    const form = document.getElementById('taskForm'); // Ensure form is defined here
    modal.style.display = 'flex';

    // Populate the form with task data
    document.getElementById('taskProject').value = task.project || '';
    document.getElementById('taskTitle').value = task.title || '';
    document.getElementById('taskDescription').value = task.description || '';
    document.getElementById('taskDueDate').value = task.dueDate || '';
    document.getElementById('taskPriority').value = task.priority || '';
    document.getElementById('taskStatus').value = task.taskStatus || '';
    document.getElementById('taskNotes').value = task.notes || '';

    // Track editing state
    form.setAttribute('data-editing', 'true');
    card.setAttribute('data-editing-card', 'true');
}


function updateTaskCard(task, card) {
    const titleElement = card.querySelector('h3');
    const descriptionElement = card.querySelector('p:nth-child(2)');
    const dueDateElement = card.querySelector('p:nth-child(3)');
    const priorityElement = card.querySelector('p:nth-child(4)');
    const statusElement = card.querySelector('p:nth-child(5)');
    const notesElement = card.querySelector('p:nth-child(6)');

    if (titleElement) titleElement.textContent = task.title;
    if (descriptionElement) descriptionElement.textContent = task.description;
    if (dueDateElement) dueDateElement.textContent = `Due: ${task.dueDate}`;
    if (priorityElement) priorityElement.textContent = `Priority: ${task.priority}`;
    if (statusElement) statusElement.textContent = `Status: ${task.taskStatus}`;
    if (notesElement) notesElement.textContent = task.notes;
}

function appendCardToCategory(task, card) {
    let categoryId;
    
    switch (task.taskStatus.toLowerCase()) {
        case 'not-started':
            card.classList.add('not-started');
            categoryId = 'not-started';
            break;
        case 'in-progress':
            card.classList.add('in-progress');
            categoryId = 'working-on';
            break;
        case 'blocked':
            card.classList.add('blocked');
            categoryId = 'blocked';
            break;
        case 'complete':
            card.classList.add('complete');
            categoryId = 'complete';
            break;
        default:
            console.error(`No category found for status: ${task.taskStatus}`);
            return;
    }

    const categoryElement = document.getElementById(categoryId);

    if (categoryElement) {
        categoryElement.appendChild(card);
    } else {
        console.error(`No category found for status: ${task.taskStatus}`);
    }
}

