import { demoTasks, variantTasks, variantNumber } from "./data.js";
import { taskSelectors } from "./task-selectors.js";
import { taskView } from "./task-view.js";
import { getTaskStats, setTaskCompleted, removeTask } from "./task-service.js";

console.log("=== ПРАКТИЧЕСКАЯ РАБОТА № 3 ===");
console.log(`Успешный импорт данных. Номер варианта: ${variantNumber}\n`);

let currentTasks = [...demoTasks];
let currentFilter = 'all';

function updateUI() {
  let filtered = currentTasks;
  if (currentFilter === 'active') filtered = currentTasks.filter(t => !t.completed);
  if (currentFilter === 'completed') filtered = currentTasks.filter(t => t.completed);

  taskView.renderTasks(filtered, taskSelectors.list);
  
  // Юзаем твой родной getTaskStats из сервиса
  const stats = getTaskStats(currentTasks);
  
  // Переводим твои свойства в селекторы шаблона
  taskView.renderSummary({
    total: stats.total,
    completed: stats.completed,
    left: stats.pending, // в твоем сервисе это pending
    progress: stats.progress
  }, taskSelectors);
}

if (taskSelectors.list) {
  taskSelectors.list.addEventListener('click', (e) => {
    const li = e.target.closest('[data-task-id]');
    if (!li) return;
    const id = parseInt(li.dataset.taskId, 10);

    if (e.target.classList.contains('task-checkbox')) {
      const result = setTaskCompleted(currentTasks, id, e.target.checked);
      if (result.ok) {
        currentTasks = result.tasks;
        updateUI();
      }
    }

    if (e.target.classList.contains('delete-btn')) {
      const result = removeTask(currentTasks, id);
      if (result.ok) {
        currentTasks = result.tasks;
        updateUI();
      }
    }
  });
}

updateUI();
