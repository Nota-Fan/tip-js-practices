import { demoTasks, variantTasks, variantNumber } from "./data.js";
import { taskSelectors } from "./task-selectors.js";
import { taskView } from "./task-view.js";

// Подтягиваем твой сервис из ПР2
import { 
  findTaskById, getPendingTasks, getTaskTitles, getTaskStats,
  addTask, setTaskCompleted, renameTask, removeTask 
} from "./task-service.js";

console.log("=== ПРАКТИЧЕСКАЯ РАБОТА № 3 ===");
console.log(`Успешный импорт данных. Номер варианта: ${variantNumber}\n`);

let currentTasks = [...demoTasks];
let currentFilter = 'all';

function updateUI() {
  let filtered = currentTasks;
  if (currentFilter === 'active') filtered = currentTasks.filter(t => !t.completed);
  if (currentFilter === 'completed') filtered = currentTasks.filter(t => t.completed);

  taskView.renderTasks(filtered, taskSelectors.list);
  
  // Рассчитываем статистику через функции твоего сервиса
  const stats = {
    total: currentTasks.length,
    completed: currentTasks.filter(t => t.completed).length,
    left: currentTasks.filter(t => !t.completed).length,
    progress: currentTasks.length ? Math.round((currentTasks.filter(t => t.completed).length / currentTasks.length) * 100) : 0
  };
  taskView.renderSummary(stats, taskSelectors);
}

// Слушатель кликов по списку (Чекбоксы и Удаление)
if (taskSelectors.list) {
  taskSelectors.list.addEventListener('click', (e) => {
    const li = e.target.closest('[data-task-id]');
    if (!li) return;
    const id = parseInt(li.dataset.taskId, 10);

    if (e.target.classList.contains('task-checkbox')) {
      currentTasks = currentTasks.map(t => t.id === id ? { ...t, completed: e.target.checked } : t);
      updateUI();
    }

    if (e.target.classList.contains('delete-btn')) {
      currentTasks = currentTasks.filter(t => t.id !== id);
      updateUI();
    }
  });
}

// Инициализация
updateUI();
