console.log("=== Задание 3: Условия и Циклы (Вариант 26) ===");

const myVariant = 26;
// 
const totalTasks = 10 + myVariant; 

console.log(`Всего необходимо выполнить задач: ${totalTasks}`);

for (let i = 1; i <= totalTasks; i++) {
    if (i % 10 === 0) {
        console.log(`Прогресс: Выполнено задач — ${i} из ${totalTasks}...`);
    }
}

// Финальная проверка условия
if (totalTasks > 30) {
    console.log("Статус: Нагрузка высокая, объём задач превышает стандартный лимит.");
} else {
    console.log("Статус: Нагрузка в пределах нормы.");
}
