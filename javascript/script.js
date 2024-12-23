$(document).ready(function () {
    function formatacao(tempo) {
        if (tempo >= 0 && tempo <= 9) {
            var formatado = tempo.toString();
            formatado = "0" + formatado;
        } else {
            var formatado = tempo.toString();
        }
        return formatado;
    }

    window.setInterval(function () {
        var agora = new Date();
        var hora = agora.getHours();
        var minuto = agora.getMinutes();
        var segundo = agora.getSeconds();

        $("#relogio").text(formatacao(hora) + " : " + formatacao(minuto) + " : " + formatacao(segundo));
    }, 1000);

    var duracao = new Date();
    var dia = duracao.getDate();
    var mes = duracao.getMonth() + 1;
    var ano = duracao.getFullYear();

    $("#data").text(formatacao(dia) + ' / ' + formatacao(mes) + ' / ' + ano);
    $("#ano").text(ano);

    var fotos = [
        "imagens/foto1.jpg",
        "imagens/foto2.jpg",
        "imagens/foto3.jpg",
        "imagens/foto4.jpg",
        "imagens/foto5.jpg",
    ];

    var fotoPadrao = "imagens/foto-padrao.jpg";
    var indice = 0;

    $("#mudar-tema").click(function () {
        if (indice < fotos.length) {
            $(".imagem").attr("src", fotos[indice]);
            indice++;
        } else {
            $(".imagem").attr("src", fotoPadrao);
            indice = 0;
        }
    });
});
