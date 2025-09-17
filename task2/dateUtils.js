/**
 * Утилиты для работы с датами
 */

/**
 * Проверяет, является ли год високосным
 * @param {number} year 
 * @returns {boolean}
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Определяет день недели для заданной даты
 * @param {number} day 
 * @param {number} month
 * @param {number} year
 * @returns {string}
 */
function getDayOfWeek(day, month, year) {
    const date = new Date(year, month - 1, day);
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    return days[date.getDay()];
}

/**
 * Вычисляет возраст пользователя
 * @param {number} day 
 * @param {number} month 
 * @param {number} year 
 * @returns {number} 
 */
function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

module.exports = {
    isLeapYear,
    getDayOfWeek,
    calculateAge
};