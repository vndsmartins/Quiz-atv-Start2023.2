function verificarRespostas(event) {
    event.preventDefault();

    const respostasCorretas = ["c", "b", "b", "b", "b"];
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result");
    const formData = new FormData(form);
    let pontuacao = 0;

    for (let i = 1; i <= respostasCorretas.length; i++) {
        const resposta = formData.get("p" + i);
        if (resposta === respostasCorretas[i - 1]) {
            pontuacao++;
        }
    }

    document.querySelector(".quiz-container").style.display = "none";

    document.querySelector(".resultado-container").style.display = "block";
    document.getElementById("score").textContent = pontuacao;   
}

const quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", verificarRespostas);