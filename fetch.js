// Adicione este trecho para obter referência ao formulário
var formulario = document.getElementById("formulario");

function criar() {
    fetch("http://localhost:8080/paciente", {
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
            "nome": document.getElementById("username").value,
            "email": document.getElementById("email").value,
            "senha": document.getElementById("senha").value,
            "telefone": document.getElementById("numero").value, // Corrigido para o campo de telefone
            // Adicione os outros campos conforme necessário
        })
    })
        .then(res => res.json())
        .catch(error => console.error("Erro:", error));
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    criar();
    formulario.reset();
});

