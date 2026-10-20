import { demoTasks } from "./data.js";
import { createTask, getTaskStats } from "./task-service.js";

console.log("=== ПРАКТИЧЕСКАЯ РАБОТА № 4 ===");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [...demoTasks];

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const list = document.querySelector('.task-list');
    if (list) {
        list.innerHTML = tasks.map(t => `
            <li class="${t.completed ? 'completed' : ''}">
                <span>${t.title} [${t.priority}]</span>
            </li>
        `).join('');
    }
    
    // Выводим твою статистику на страницу, если есть элементы
    const stats = getTaskStats(tasks);
    const info = document.querySelector('.summary-info');
    if (info) {
        info.textContent = `Всего: ${stats.total} | Осталось: ${stats.pending}`;
    }
}

const form = document.querySelector('.task-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('.task-input');
        if (!input) return;

        // Генерируем новый ID и проверяем через твой createTask
        const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        const result = createTask(newId, input.value, "medium");

        if (result.ok) {
            tasks.push(result.task);
            input.value = '';
            saveAndRender();
        } else {
            // Выводим твою ошибку из сервиса ("Длина названия после очистки пробелов...")
            alert(`Ошибка: ${result.error}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', saveAndRender);
