function formatDuration(seconds) {
    // Se o número de segundos for zero, retorna "now"
    if (seconds === 0) {
        return "now";
    }

    // Definindo os valores das unidades de tempo
    const years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= (365 * 24 * 60 * 60);

    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    seconds %= (30 * 24 * 60 * 60);

    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= (24 * 60 * 60);

    const hours = Math.floor(seconds / (60 * 60));
    seconds %= (60 * 60);

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Construindo a lista das partes da duração
    const timeUnits = [];
    if (years > 0) timeUnits.push(`${years} year${years > 1 ? 's' : ''}`);
    if (months > 0) timeUnits.push(`${months} month${months > 1 ? 's' : ''}`);
    if (days > 0) timeUnits.push(`${days} day${days > 1 ? 's' : ''}`);
    if (hours > 0) timeUnits.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0) timeUnits.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    if (seconds > 0) timeUnits.push(`${seconds} second${seconds > 1 ? 's' : ''}`);

    // Formatando a resposta de maneira amigável
    if (timeUnits.length === 1) {
        return timeUnits[0]; // Quando há apenas uma unidade de tempo
    }

    // Quando há múltiplas unidades de tempo
    const lastUnit = timeUnits.pop();
    return `${timeUnits.join(', ')} and ${lastUnit}`;
}

// Testes
console.log(formatDuration(1));    // "1 second"
console.log(formatDuration(62));   // "1 minute and 2 seconds"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(0));    // "now"
console.log(formatDuration(120));  // "2 minutes"
console.log(formatDuration(31536000)); // "1 year"