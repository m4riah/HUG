//IR PARA PAGINA INICIAL/
function redirecionarParaHome() {
  // Redireciona para a página desejada
  window.location.href = "/home/home.html";
}

//TELA SENHA VOLTAR PARA LOGIN/
function redirecionarLogin() {
  // Redireciona para a página desejada
  window.location.href = "/index.html";
}


/////////////// BASE /////////////////

document.addEventListener('DOMContentLoaded', function () {
  var opMenus = document.querySelectorAll('.op-menu');

  opMenus.forEach(function (opMenu) {
      opMenu.addEventListener('click', function () {
          // Remove 'clicked' class from all op-menus
          opMenus.forEach(function (menu) {
              menu.classList.remove('clicked');
          });

          // Add 'clicked' class to the clicked op-menu
          opMenu.classList.add('clicked');

          // Check if the clicked op-menu is the "INÍCIO" menu item
          if (opMenu.querySelector('.text-menu').textContent.trim() === 'INÍCIO') {
              // Redirect to the home page
              window.location.href = '/home/home.html';
          }

          //IR PARA MINHAS SESSÕES/
          if (opMenu.querySelector('.text-menu').textContent.trim() === 'MINHAS SESSÕES') {
            // Redirect to the home page
            window.location.href = '/sessoes/sessoes.html';
        }

        //IR PARA TELA PSICOLOGOS/
        if (opMenu.querySelector('.text-menu').textContent.trim() === 'PSICÓLOGOS') {
          // Redirect to the home page
          window.location.href = '/selecao/selecao.html';
        }

              //IR PARA TELA AJUDA/
              if (opMenu.querySelector('.text-menu').textContent.trim() === 'AJUDA') {
                // Redirect to the home page
                window.location.href = '/ajuda/ajuda.html';
        }

                    //IR PARA CONFIGURAÇÕES/
                    if (opMenu.querySelector('.text-menu').textContent.trim() === 'CONFIGURAÇÕES') {
                      // Redirect to the home page
                      window.location.href = '/config/config.html';
                    }
        
                    //IR PARA PSICOLOGOS/
        if (opMenu.querySelector('.text-menu').textContent.trim() === 'SAIR') {
          // Redirect to the home page
          window.location.href = '/index.html';
        }
      
      });
  });
});


// /////// PSICOLOGO /////////


  const totalDates = 5;
  let currentStartIndex = 0;
  const dateRowElement = document.getElementById("dateRow");
  const dayRowElement = document.getElementById("dayRow");

  function updateDates() {
    const displayedDates = getDisplayedDates();
    if (dateRowElement) {
      dateRowElement.innerHTML = displayedDates.map(date => `<div>${date}</div>`).join("");
    }
  }

  function updateDaysOfWeek() {
    const today = new Date();
    const daysOfWeek = [];

    for (let i = 0; i < 5; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
      daysOfWeek.push(dayOfWeek);
    }

    if (dayRowElement) {
      dayRowElement.innerHTML = daysOfWeek.map(day => `<div>${day}</div>`).join("");
    }
  }

  function getDisplayedDates() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const displayedDates = [];

    for (let i = 0; i < totalDates; i++) {
      const date = new Date(currentYear, currentMonth, 1 + currentStartIndex + i);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      displayedDates.push(formattedDate);
    }
    return displayedDates;
  }

  function nextDates() {
    currentStartIndex += totalDates;
    updateDates();
    updateDaysOfWeek();
  }

  function prevDates() {
    currentStartIndex -= totalDates;
    if (currentStartIndex < 0) {
      currentStartIndex = 0;
    }
    updateDates();
    updateDaysOfWeek();
  }

  // Initial update
  updateDates();
  updateDaysOfWeek();

/////////// redirecionar para pag alt_sessoes ///////////

function redirecionarParaOutraPagina() {
  window.location.href = '/alteracao/alterarsessoes.html';
}

//////// pop up - alterar sessoes ////////

document.addEventListener('DOMContentLoaded', function () {
  var openPopupBtns = document.querySelectorAll('.openPopupBtn');
  var closePopupBtn = document.getElementById('closePopupBtn');
  var popup = document.getElementById('popup');

  openPopupBtns.forEach(function (button) {
    button.addEventListener('click', function () {
      exibirPopup();
    });
  });

  closePopupBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      popup.style.display = 'none';
    }
  });

  function exibirPopup() {
    popup.style.display = 'block';
  }
});


//////////////// MUDAR HORARIO DINAMICAMENTE /////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  var openPopupBtns = document.querySelectorAll('.horario-btn');
  var closePopupBtn = document.getElementById('closePopupBtn');
  var popup = document.getElementById('popup');
  var dataAgendamento = document.getElementById('dataAgendamento');
  var horarioAgendamento = document.getElementById('horarioAgendamento');

  openPopupBtns.forEach(function (button) {
    button.addEventListener('click', function () {
      // Obtenha a data e o horário do botão clicado
      var now = new Date();
      var data = now.toLocaleDateString();
      var horario = button.textContent;

      // Atualize o conteúdo do pop-up com as informações dinâmicas
      dataAgendamento.textContent = 'DATA: ' + data;
      horarioAgendamento.textContent = 'HORÁRIO: ' + horario;

      // Exiba o pop-up
      popup.style.display = 'block';
    });
  });

  closePopupBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      popup.style.display = 'none';
    }
  });
});


//////////////// SEGUNDO POPUP ///////////////////////
 
  function exibirPopupDeSucesso() {
    var successPopup = document.getElementById('successPopup');
    successPopup.style.display = 'block';
  }

  // Função para fechar o popup atual
  function fecharPopupAtual() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  // Adiciona um ouvinte de evento ao botão de confirmação
  document.getElementById('confirmPopupBtn').addEventListener('click', function() {
    // Fecha o popup atual
    fecharPopupAtual();

    // Exibe o popup de sucesso
    exibirPopupDeSucesso();
  });

  // Adiciona um ouvinte de evento ao botão de prosseguir
  document.getElementById('prosseguirBtn').addEventListener('click', function() {
    // Aqui você pode adicionar lógica adicional para lidar com o botão "Prosseguir"
    // Por exemplo, redirecionar para outra página
    window.location.href = '/sessoes/sessoes.html';
  });

  // Adiciona um ouvinte de evento ao botão de fechar no popup de sucesso
  document.getElementById('closeSuccessPopupBtn').addEventListener('click', function() {
    var successPopup = document.getElementById('successPopup');
    successPopup.style.display = 'none';
  });

/////////////////////////////// FORMULARIO ///////////////////////////



function submitForm() {
    // Obter os valores do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar se os campos não estão vazios
    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Fazer alguma lógica de tratamento com a senha (por exemplo, verificar seu comprimento)
    if (password.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    // Construir os dados para a solicitação
    var dados = {
        usuario: username,
        senha: password
    };

    // Enviar a solicitação para o backend (substitua 'sua_api_auth' pelo caminho real da sua API)
    fetch('sua_api_auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        // Manipular a resposta do backend
        console.log("Resposta do Backend:", data);

        // Adicione aqui lógica adicional com base na resposta, por exemplo, redirecionar o usuário
    })
    .catch(error => {
        console.error('Erro durante a solicitação:', error);
        // Adicione aqui lógica adicional para lidar com erros
    });
}

 /// EVENTO CLICK PARA PAG LAUDOS //
function irParaLaudos() {
  window.location.href = '/laudos/laudos.html';
}

//EVENTO CLICK PARA PAG HOME (SELEÇÃO DE PSI)/
function voltarParaHome() {
  window.location.href = '/home/home.html';
}

//EVENTO CLICK PARA SOBRE PSICOLOGO(A)/
function voltarParPsi() {
  window.location.href = '/psicologo/psicologo.html';
}

//EVENTO CLICK PARA VOLTA SELEÇÃO PSICOLOGO(A)/
function voltarSelecao() {
  window.location.href = '/selecao/selecao.html';
}

//EVENTO SLIDER AUTO/
document.addEventListener("DOMContentLoaded", function() {
  // Seu código JavaScript aqui
  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval(function() {
      nextImage();
  }, 5000);

  function nextImage() {
      count++;
      if (count > 3) {
          count = 1;
      }

      document.getElementById("radio" + count).checked = true;
  }
});

//IR PARA PAGINA DE TAREFAS/
function redirecionarPaginaTarefas() {
  // Redireciona para a página desejada
  window.location.href = "/tarefas/tarefas.html";
}
