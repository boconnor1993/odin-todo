import { openEditModal } from './modal';
import { loadTasksFromLocalStorage } from './storage';

export class Task {
    constructor(project, title, description, dueDate, priority, taskStatus, notes) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskStatus = taskStatus;
        this.notes = notes;
    }
}

export function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('todo-card');
    card.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p><strong>Due:</strong> ${task.dueDate}</p>
        <p><strong>Priority:</strong> ${task.priority}</p>
        <p><strong>Status:</strong> ${task.taskStatus}</p>
        <button class="delete-btn"><i class='bx bx-trash'></i></button>
        <button class="edit-btn"><i class='bx bx-edit'></i></button>
    `;

    // Add event listeners for the buttons
    const editBtn = card.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        openEditModal(task, card);
    });

    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        deleteTaskCard(task, card);
    });

    return card;
}

export function updateTaskCard(task, card) {
    // Update card content
    card.querySelector('h3').textContent = task.title;
    card.querySelector('p:nth-child(2)').textContent = task.description;
    card.querySelector('p:nth-child(3)').textContent = `Due: ${task.dueDate}`;
    card.querySelector('p:nth-child(4)').textContent = `Priority: ${task.priority}`;
    card.querySelector('p:nth-child(5)').textContent = `Status: ${task.taskStatus}`;

    // Remove old status class
    card.classList.remove('not-started', 'in-progress', 'blocked', 'complete');

    // Remove card from its current category
    card.remove();

    // Append card to the correct category and add the new status class
    appendCardToCategory(task, card);

    // Update the task in localStorage
    let tasks = loadTasksFromLocalStorage();
    tasks = tasks.map(t => t.title === task.title ? task : t);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskCard(task, card) {
    // Remove the card from the DOM
    card.remove();

    // Remove the task from localStorage
    let tasks = loadTasksFromLocalStorage();
    tasks = tasks.filter(t => t.title !== task.title); // or use a unique identifier if available
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


export function appendCardToCategory(task, card) {
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