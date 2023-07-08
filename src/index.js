const updateDate = () => {
    let date_ini = new Date(); // Data de hoje.
    let date_end = new Date("2023-08-02T07:00:00-03:00"); // Data alvo.
    let milissegundo = (date_end.getTime() - date_ini.getTime()) / 1000;
    let segundos = formatDigit(Math.floor(milissegundo % 60));
    let minutos = formatDigit(Math.floor((milissegundo / 60) % 60));
    let horas = formatDigit(Math.floor((milissegundo / 3600) % 24));
    let dias = Math.floor(milissegundo / (60 * 60 * 24));

    // Segundos
    seconds.innerHTML = `${segundos}`;
    // Minutos
    minutes.innerHTML = `${minutos}`
    // Horas    
    hours.innerHTML = `${horas}`;
    // Dias
    days.innerHTML = `${dias}`;

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