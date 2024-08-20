// Filter functionality
export function applyFilter(priorities) {
    const cards = document.querySelectorAll('.todo-card');
    cards.forEach(card => {
        const priority = card.querySelector('p:nth-child(4)').textContent.split(': ')[1].toLowerCase();
        if (priorities.includes(priority)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}