export function formatTime(time: Date, formatType?: string) {
    if (formatType === '12') {
        return formatDate(time);
    }

    return `${time.getHours()}:${fomratMinutes(time.getMinutes())}`;
}

export function formatDate(date: Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;

    let strTime = hours + ':' + fomratMinutes(minutes) + ' ' + ampm;

    return strTime;
}

export function fomratMinutes(minutes: string | number) {
    return (minutes < 10 ? '0' + minutes : minutes);
}
