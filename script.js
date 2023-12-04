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

/////////// redirecionar ///////////

function redirecionarParaOutraPagina() {
  // Substitua 'outra-pagina.html' pelo caminho real da sua outra página
  window.location.href = 'http://127.0.0.1:5501/alt_sessoes/alte_sessoes.html';
}

//////// pop up - alterar sessoes ////////

// script.js

document.addEventListener('DOMContentLoaded', function() {
  var openPopupBtn = document.getElementById('openPopupBtn');
  var closePopupBtn = document.getElementById('closePopupBtn');
  var popup = document.getElementById('popup');

  openPopupBtn.addEventListener('click', function() {
      popup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          popup.style.display = 'none';
      }
  });
});





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