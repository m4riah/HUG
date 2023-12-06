var formulario = document.getElementById("form");

function criar() {
  fetch("http://localhost:8080/paciente", {
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      "nome": document.getElementById("username").value,
      "email": document.getElementById("email").value,
      "senha": document.getElementById("senha").value,
      "telefone": document.getElementById("telefone").value,
      "cpf": document.getElementById("cpf").value,
    }),
    cache: "no-store"
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error("Erro:", error));
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  criar();
});