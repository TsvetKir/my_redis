import { number } from "yargs";

export function formDate(old_date: number) {
    const now = new Date();
    const create_at = new Date(old_date * 1000);
    const daysLag = Math.ceil(
        Math.abs(now.getTime() - create_at.getTime()) / (1000 * 3600)
    );
    let result = '';
    if (daysLag === 1 || daysLag === 21) {
        result = `${daysLag} час назад`;
    } else if ((daysLag > 1 && daysLag < 5) || (daysLag > 21 && daysLag < 25)) {
        result = `${daysLag} часа назад`;
    } else if (daysLag > 4 && daysLag < 21) {
        result = `${daysLag} часов назад`;
    } else {
        result = 'менее часа назад';
    }

    return daysLag < 24 ? `${result}`
        : create_at.toLocaleDateString(
            'ru',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }
        );
}