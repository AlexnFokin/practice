/**
 * Основной файл приложения
 */
const readline = require('readline');
const { isLeapYear, getDayOfWeek, calculateAge } = require('./dateUtils');
const { displayBirthdayDigital } = require('./displayUtils');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
  * @param {string} question
 * @param {number} min
 * @param {number} max
 * @returns {Promise<number>} 
 */
function askNumber(question, min, max) {
    return new Promise((resolve) => {
        const ask = () => {
            rl.question(question, (answer) => {
                const number = parseInt(answer);
                if (isNaN(number) || number < min || number > max) {
                    console.log(`Пожалуйста, введите число от ${min} до ${max}`);
                    ask();
                } else {
                    resolve(number);
                }
            });
        };
        ask();
    });
}

/**
 * Основная функция приложения
 */
async function main() {
    console.log('🎉 Добро пожаловать в программу анализа даты рождения! 🎉\n');

    try {
        // Запрос данных у пользователя
        const day = await askNumber('Введите день рождения (1-31): ', 1, 31);
        const month = await askNumber('Введите месяц рождения (1-12): ', 1, 12);
        const year = await askNumber('Введите год рождения (1900-2023): ', 1900, 2023);

        console.log('\n' + '='.repeat(50));
        console.log(`📅 Анализ вашей даты рождения: ${day}.${month}.${year}`);
        console.log('='.repeat(50));

        // Определение дня недели
        const dayOfWeek = getDayOfWeek(day, month, year);
        console.log(`📆 День недели: ${dayOfWeek}`);

        // Проверка високосного года
        const leapYear = isLeapYear(year);
        console.log(`📅 ${year} год был ${leapYear ? 'високосным' : 'не високосным'}`);

        // Расчет возраста
        const age = calculateAge(day, month, year);
        console.log(`🎂 Сейчас вам: ${age} `);

        // Отображение даты в стиле электронного табло
        displayBirthdayDigital(day, month, year);

    } catch (error) {
        console.error('Произошла ошибка:', error);
    } finally {
        rl.close();
    }
}

// Запуск приложения
if (require.main === module) {
    main();
}

module.exports = {
    askNumber,
    main
};