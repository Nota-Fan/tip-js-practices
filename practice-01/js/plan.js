"use strict";
const totaltasks=12;
const completed=6;
const dailylimit=3;

const istasksinvalid = typeof totaltasks!=="number" || totaltasks<0 || typeof completed !== "number" || completed<0 || completed>totaltasks;
const isLimitinvalid = typeof dailylimit !== "number" || !Number.isInteger(dailylimit) || 
                       dailylimit < 1 || dailylimit > 1000;
if (istasksinvalid || isLimitinvalid){
    console.log("Ошибка")
}
else{
 let remainingTasks = totalTasks - completedTasks;
    console.log("Осталось задач:", remainingTasks);

    let day = 0;

    // 3. Цикл планирования по дням (работает, пока есть задачи)
    while (remainingTasks > 0) {
        day += 1; // Увеличиваем номер дня

        // Выбираем меньшее: либо дневной лимит, либо сколько реально осталось задач (чтобы не выполнить лишнего в последний день)
        let tasksForToday = Math.min(dailyLimit, remainingTasks);
        
        remainingTasks -= tasksForToday; // Уменьшаем остаток

        console.log(`день ${day}: выполнено ${tasksForToday}, осталось ${remainingTasks}`);
    }

    // 4. Вывод итогового количества дней
    console.log("Потребуется дней:", day);
};
