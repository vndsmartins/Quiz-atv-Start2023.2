function verificarRespostas(event) {
    event.preventDefault();

    const respostasCorretas = ["b", "c", "c", "b", "c"];
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result");
    const formData = new FormData(form);
    let pontuacao = 0;

    for (let i = 1; i <= respostasCorretas.length; i++) {
        const resposta = formData.get("q" + i);
        if (resposta === respostasCorretas[i - 1]) {
            pontuacao++;
        }
    }

    resultContainer.textContent = `Você acertou ${pontuacao} de 5 perguntas.`;
}

// Adicionar evento de envio do formulário
const quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", verificarRespostas);