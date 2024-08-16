export function openModal(modal, task = null) {
    modal.style.display = 'flex';

    if (task) {
        // If a task is passed, populate the form with task details for editing
        document.getElementById('taskProject').value = task.project;
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskDueDate').value = task.dueDate;
        document.getElementById('taskPriority').value = task.priority;
        document.getElementById('taskStatus').value = task.taskStatus;
        document.getElementById('taskNotes').value = task.notes;
    }
}

export function closeModal(modal) {
    modal.style.display = 'none';
    clearForm(); // Clears the form when closing the modal
}

function clearForm() {
    document.getElementById('taskForm').reset(); // Clear form fields
}

// Utility function to detect outside clicks
export function handleOutsideClick(event, modal) {
    if (event.target === modal) {
        closeModal(modal);
    }
}
