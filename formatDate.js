const now = Date.now();
// console.log(now); //таймстемп текущего времени

function formatDate(date) {

    if (now - date < 1000) { //если разница таймстемпов меньше 1 секунды
        return "прямо сейчас";
    } else
        if (now - date < 1000 * 60) { //если разница таймстемпов меньше 1 минуты
            const n = (now - date) / 1000; //получаем разницу таймстемпов и переводим в секунды
            return `${n} сек. назад`;
        } else
            if (now - date < 1000 * 60 * 60) { //если разница таймстемпов меньше 1 часа
                const m = (now - date) / (60 * 1000); //получаем разницу таймстемпов и переводим в минуты
                return `${m} мин. назад`;
            } else {
                const showDate = new Date(now - date); //иначе преобразуем разницу таймстемпов в дату
                // console.log(t);

                const options = { //задаём формат вывода компонентов даты
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                }
                return showDate.toLocaleString("ru", options);
            }
}

//проверка условий
alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 4 * 1000)));