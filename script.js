function simular() {
    const time1 = document.getElementById('time1').value || "Time 1";
    const time2 = document.getElementById('time2').value || "Time 2";

    const golsTime1 = Math.floor(Math.random() * 5); // de 0 a 4
    const golsTime2 = Math.floor(Math.random() * 5);

    const resultado = '${time1} ${golsTime1} x ${golsTime2} ${time2}';

    document.getElementById('resultado').innerText = resultado;
}
