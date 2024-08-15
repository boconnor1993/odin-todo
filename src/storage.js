export function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}
