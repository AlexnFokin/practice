/**
 * Утилиты для отображения цифр в стиле электронного табло
 */

const digitPatterns = {
    '0': [
        ' *** ',
        '*   *',
        '*   *',
        '*   *',
        ' *** '
    ],
    '1': [
        '  *  ',
        ' **  ',
        '  *  ',
        '  *  ',
        ' *** '
    ],
    '2': [
        ' *** ',
        '*   *',
        '   * ',
        ' *   ',
        '*****'
    ],
    '3': [
        ' *** ',
        '*   *',
        '  ** ',
        '*   *',
        ' *** '
    ],
    '4': [
        '*   *',
        '*   *',
        ' ****',
        '    *',
        '    *'
    ],
    '5': [
        '*****',
        '*    ',
        '**** ',
        '    *',
        '**** '
    ],
    '6': [
        ' *** ',
        '*    ',
        '**** ',
        '*   *',
        ' *** '
    ],
    '7': [
        '*****',
        '    *',
        '   * ',
        '  *  ',
        ' *   '
    ],
    '8': [
        ' *** ',
        '*   *',
        ' *** ',
        '*   *',
        ' *** '
    ],
    '9': [
        ' *** ',
        '*   *',
        ' ****',
        '    *',
        ' *** '
    ],
    ' ': [
        '     ',
        '     ',
        '     ',
        '     ',
        '     '
    ]
};

/**
 * Преобразует строку в графическое представление для электронного табло
 * @param {string} text
 * @returns {string} 
 */
function textToDigitalDisplay(text) {
    const lines = ['', '', '', '', ''];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const pattern = digitPatterns[char] || digitPatterns[' '];

        for (let j = 0; j < 5; j++) {
            lines[j] += pattern[j] + '  ';
        }
    }

    return lines.join('\n');
}

/**
 * Отображает дату в формате дд мм гггг как на электронном табло в одну строку
 * @param {number} day
 * @param {number} month 
 * @param {number} year
 */
function displayBirthdayDigital(day, month, year) {
    console.log('\n🎂 Ваша дата рождения на электронном табло:\n');

    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const yearStr = year.toString();

    const dateString = `${dayStr} ${monthStr} ${yearStr}`;

    console.log(textToDigitalDisplay(dateString));
    console.log();
}

module.exports = {
    textToDigitalDisplay,
    displayBirthdayDigital
};