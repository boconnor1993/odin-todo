import './styles.css'
import Task from './tasks'

// Modal Popup
window.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('taskForm');

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

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Capture form data
        const project = document.getElementById('taskProject').value;
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;
        const status = document.getElementById('taskStatus').value;
        const notes = document.getElementById('taskNotes').value;

        // Create new task
        const task = new Task(project, title, description, dueDate, priority, status, notes);

        // Create task card
        const card = createTaskCard(task);

        // Status switch to append to the correct list
        if (task.taskStatus === 'not-started') {
            card.classList.add('not-started');
            document.getElementById('not-started').appendChild(card);
        } else if (task.taskStatus === 'in-progress') {
            card.classList.add('in-progress');
            document.getElementById('working-on').appendChild(card);
        } else if (task.taskStatus === 'blocked') {
            card.classList.add('blocked');
            document.getElementById('blocked').appendChild(card);
        } else if (task.taskStatus === 'complete') {
            card.classList.add('complete');
            document.getElementById('complete').appendChild(card);
        } else {
            console.log('Error: Task status not found');
        }

        // Clear form fields and close modal
        form.reset();
        modal.style.display = 'none'
    });
});


function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('todo-card');
    card.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>
        <p>${task.priority}</p>
        <p>${task.taskStatus}</p>
        <p>${task.notes}</p>
    `;
    return card;
}