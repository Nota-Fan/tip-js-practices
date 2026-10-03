console.log("=== Задание 2: Исследование типов данных ===");

// 1. Создаем переменные разных типов данных
const variant = 26;                 // Тип: Number (число)
const message = "Мой вариант: ";     // Тип: String (строка)
const isFinished = true;            // Тип: Boolean (логический: истина/ложь)

// 2. С помощью оператора typeof проверяем, как JS определил эти типы
console.log("Переменная variant:", variant, "| Тип:", typeof variant);
console.log("Переменная message:", message, "| Тип:", typeof message);
console.log("Переменная isFinished:", isFinished, "| Тип:", typeof isFinished);

// 3. Важный эксперимент: неявное приведение типов (конкатенация)
// JS автоматически превратит число 26 в текст и склеит две строки вместе
const combinedResult = message + variant;
console.log("Результат операции (message + variant):", combinedResult);
console.log("Тип итогового результата:", typeof combinedResult);
