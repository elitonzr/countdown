const updateDate = () => {
    const img = document.querySelector('.box-imagem');
    const txtElement = document.getElementById('text');

    let date_ini = new Date(); // Data de hoje.
    let date_end = new Date("2024-07-30T07:00:00-03:00"); // Data alvo.
    let milissegundo = (date_end.getTime() - date_ini.getTime()) / 1000;
    let segundos = formatDigit(Math.floor(milissegundo % 60));
    let minutos = formatDigit(Math.floor((milissegundo / 60) % 60));
    let horas = formatDigit(Math.floor((milissegundo / 3600) % 24));
    let dias = formatDigit(Math.floor(milissegundo / (60 * 60 * 24)));

    if (segundos >= 0) {
        // Segundos
        seconds.innerHTML = `${segundos}`;

        // Minutos
        minutes.innerHTML = `${minutos}`

        // Horas    
        hours.innerHTML = `${horas}`;

        // Dias
        days.innerHTML = `${dias}`;

        setTimeout(() => {
            updateDate();
        }, 1000);

    } else {
        txtElement.innerHTML = "Ele Voltou!"
        const appElement = document.getElementById('app');

        const H1Element = document.createElement("H1");
        H1Element.innerHTML = "Vai trabalhar!";
        appElement.appendChild(H1Element);

        const timerElement = document.getElementById('timer');
        timerElement.parentNode.removeChild(timerElement);

        // const h1 = document.createElement("H1");
        // const textNode = document.createTextNode("Hello World");
        // h1.appendChild(textNode);
        // document.body.appendChild(h1);
    }

    // Cria um loop


    // if ((segundos % 2) > 0) {
    if (img.classList.contains('inverter')) {
        img.classList.remove('inverter');
    } else {
        img.classList.add('inverter');
    }
    // }
};

// Acrescenta zero na frente de numeros menores que 9.
const formatDigit = (digit) => {
    return digit > 9 ? `${digit}` : `0${digit}`;
};

updateDate();