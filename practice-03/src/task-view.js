export const taskView = {
  renderTasks(tasks, container) {
    if (!container) return;
    container.innerHTML = tasks.map(task => `
      <li class="task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        <span class="task-title">${this.escapeHtml(task.title)}</span>
        <button class="delete-btn">&times;</button>
      </li>
    `).join('');
  },

  renderSummary(stats, selectors) {
    if (selectors.countAll) selectors.countAll.textContent = stats.total;
    if (selectors.countDone) selectors.countDone.textContent = stats.completed;
    if (selectors.countLeft) selectors.countLeft.textContent = stats.left;
    if (selectors.progress) {
      selectors.progress.style.width = `${stats.progress || 0}%`;
    }
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
  }
};
