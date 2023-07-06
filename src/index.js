/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
];

const MONTHS = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

const updateDate = () => {
    // Cria um novo objeto Date e obtém as informações completas de Data/Hora
    const completeDate = new Date();

    // Variáveis de tempo
    let currentHour = formatDigit(completeDate.getHours());
    let currentMinute = formatDigit(completeDate.getMinutes());

    // Variáveis de Data
    let currentDay = completeDate.getDay();
    let currentNumber = completeDate.getDate();
    let currentMonth = completeDate.getMonth();
    let currentYear = completeDate.getFullYear();

    // let diaVolta = new Date("07/03/2023");
    // diaVolta.setDate(diaVolta.getDate() + 30);

    let date_ini = new Date(); // de hoje.
    let date_end = new Date("2023-08-02T07:00:00-03:00"); // data de volta.


    // Variáveis de Data Alvo
    let targetDay = date_end.getDay();
    let targetNumber = date_end.getDate();
    let targetMonth = date_end.getMonth();
    let targetYear = date_end.getFullYear();

    let time_rest = date_end.getTime() - date_ini.getTime();

    let S = time_rest / 1000;
    let M = S / 60;
    S = formatDigit(Math.floor(S % 60));
    let H = formatDigit(Math.floor((M / 60) % 24));
    M = formatDigit(Math.floor(M % 60))

    let d = Math.floor(time_rest / (1000 * 60 * 60 * 24));

    // Atualiza a hora
    // currentTime.innerHTML = `${currentHour}:${currentMinute}`;

    // Atualização da Data "Hoje é quarta, dia 04 de Janeiro de 2023"
    targetDate.innerHTML = `${DAYS[targetDay]}, dia ${targetNumber} de ${MONTHS[targetMonth]} de ${targetYear}`;
    //contagem.innerHTML = `${d} dias, ${H}:${M}:${S}`
    days.innerHTML = `${d}`
    hours.innerHTML = `${H}`
    minutes.innerHTML = `${M}`
    seconds.innerHTML = `${S}`

    //targetDate.innerHTML = `Faltam ${diaVolta} dias`;

    // Cria um loop
    setTimeout(() => {
        updateDate();
    }, 1000);
};

// Acrescenta zero na frente de numeros menores que 9.
const formatDigit = (digit) => {
    return digit > 9 ? `${digit}` : `0${digit}`;
};

updateDate();