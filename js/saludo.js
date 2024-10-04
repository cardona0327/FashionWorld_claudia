function mostrarSaludoEnIdiomas(mensaje) {
    const saludos = {
        'es': mensaje, // Español
        'en': "Good " + (mensaje.includes("días") ? "morning" : mensaje.includes("tardes") ? "afternoon" : "night") + "!",
        'fr': "Bon " + (mensaje.includes("días") ? "matin" : mensaje.includes("tardes") ? "après-midi" : "soir") + "!",
        'it': "Buon " + (mensaje.includes("días") ? "mattina" : mensaje.includes("tardes") ? "pomeriggio" : "sera") + "!",
        'de': "Guten " + (mensaje.includes("días") ? "Morgen" : mensaje.includes("tardes") ? "Nachmittag" : "Abend") + "!",
        'pt': "Bom " + (mensaje.includes("días") ? "dia" : mensaje.includes("tardes") ? "tarde" : "noite") + "!",
        'ja': (mensaje.includes("días") ? "おはようございます" : mensaje.includes("tardes") ? "こんにちは" : "こんばんは") + "!",
        'zh': (mensaje.includes("días") ? "早上好" : mensaje.includes("tardes") ? "下午好" : "晚上好") + "!"
    };

    const idiomas = Object.keys(saludos);
    
    let i = 0;
    const intervalo = setInterval(() => {
        if (i >= idiomas.length) {
            clearInterval(intervalo);
            document.getElementById("saludo").style.opacity = '0'; // Desaparece el saludo
            return;
        }

        const idioma = idiomas[i];
        document.getElementById("saludo").innerText = saludos[idioma]; // Muestra el saludo
        i++;
    }, 1000); // Cambia cada 1 segundo
}
  