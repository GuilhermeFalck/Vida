function calculateTimeDifference() {
    const startDate = new Date("2018-05-26T00:00:00"); // Data de início
    const currentDate = new Date(); // Data atual
  
    const totalMilliseconds = currentDate - startDate;
  
    // Cálculos para cada unidade de tempo
    const seconds = Math.floor((totalMilliseconds / 1000) % 60);
    const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24)) % 30;
    const months = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24 * 30.44)) % 12; // Aproximação de mês
    const years = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24 * 365.25)); // Aproximação de ano
  
    // Atualiza os quadrados no HTML
    document.getElementById("years").innerHTML = `<strong>${years}</strong> Anos`;
    document.getElementById("months").innerHTML = `<strong>${months}</strong> Meses`;
    document.getElementById("days").innerHTML = `<strong>${days}</strong> Dias`;
    document.getElementById("hours").innerHTML = `<strong>${hours}</strong> Horas`;
    document.getElementById("minutes").innerHTML = `<strong>${minutes}</strong> Minutos`;
    document.getElementById("seconds").innerHTML = `<strong>${seconds}</strong> Segundos`;
  }
  
  // Atualiza o contador a cada segundo
  setInterval(calculateTimeDifference, 1000);
  
  // Inicializa o contador na primeira execução
  calculateTimeDifference();
  