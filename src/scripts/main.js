AOS.init();

const dataEvento = new Date("feb 23, 2025 19:00:00");
const timeStamp = dataEvento.getTime();

const contador = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distancia = timeStamp	- timeStampAtual;

    const diaMs= 1000*60*60*24;
    const horaMs = 1000*60*60;
    const minutoMs= 1000*60;

    const dias =Math.floor(distancia / diaMs);
    const horas = Math.floor((distancia % diaMs) / horaMs);
    const minutos = Math.floor((distancia % horaMs) / minutoMs);
    const segundos = Math.floor((distancia % minutoMs)/1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`
    if (distancia < 0){
        clearInterval(contador);
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
},1000);