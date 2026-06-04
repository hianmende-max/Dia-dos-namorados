const dataInicio = new Date("2026-03-13");

const hoje = new Date();

const diferenca =
    hoje - dataInicio;

const dias =
    Math.floor(
        diferenca /
        (1000 * 60 * 60 * 24)
    );

document.getElementById(
    "diasJuntos"
).innerText =
`${dias} dias`;

const musica =
document.getElementById(
    "musica"
);

document
.getElementById(
    "btnMusica"
)
.addEventListener(
    "click",
    () => {

        if(musica.paused){

            musica.play();

            document
            .getElementById(
                "btnMusica"
            )
            .innerText =
            "⏸️ Pausar Música";

        }else{

            musica.pause();

            document
            .getElementById(
                "btnMusica"
            )
            .innerText =
            "▶️ Tocar Música";
        }
    }
);