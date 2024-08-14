//index 1

const link =
  "https://mock-api.driven.com.br/api/v6/uol/participants/097afc86-6ec8-4466-bf40-f7bdb9469ffc";
const linkStatus =
  "https://mock-api.driven.com.br/api/v6/uol/status/097afc86-6ec8-4466-bf40-f7bdb9469ffc";
const linkMessage =
  "https://mock-api.driven.com.br/api/v6/uol/messages/097afc86-6ec8-4466-bf40-f7bdb9469ffc";

let destinoMensagem = "Todos";
let privacidadeMensagem = "message";

let auxilioMontaParagrafo;

let privacidadeMensagemAux;

let temSvg = false;

function chamaModal() {
  let modal = document.querySelector(".modal");
  let header = document.querySelector("header");
  let content = document.querySelector(".content-container");
  let footer = document.querySelector(".footer-container");
  modal.style.display = "block";
  header.style.opacity = 0.3;
  content.style.opacity = 0.3;
  footer.style.opacity = 0.3;
  montaModal();
  montaParagrafo();

}

function voltaModal() {
  let modal = document.querySelector(".modal");
  let header = document.querySelector("header");
  let content = document.querySelector(".content-container");
  let footer = document.querySelector(".footer-container");
  modal.style.display = "none";
  header.style.opacity = 1;
  content.style.opacity = 1;
  footer.style.opacity = 1;

  montaParagrafo();
}

function montaModal() {
  let modal = document.querySelector(".user-container");
  modal.innerHTML = "";
  modal.innerHTML += `<div onclick="selecionaContato(this)" class="user"> <p>  <ion-icon name="people"></ion-icon> Todos</p>


                <svg class="svg-person-click  " width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L4.7 9L2 6.375" stroke="#28BB25" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>  
                </div>`;

  const promise = axios.get(link);
  promise.then((res) => {
    let usuarios = res.data;
    usuarios.forEach((usuario) => {
      modal.innerHTML += `<div onclick="selecionaContato(this)" class="user"> <p  >   <ion-icon name="person-circle"></ion-icon> ${usuario.name}</p>  
            
                     <svg class="svg-person-click not-click " width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L4.7 9L2 6.375" stroke="#28BB25" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>  
            </div> `;
    });
  });

  promise.then(() => {
    let users = document.querySelectorAll(".user")

    users.forEach((u) => {
      if (u.querySelector("p").innerText == nome) {
        u.remove()
      }
    })

  });

  promise.then(() => {
    let users = document.querySelectorAll(".user")


    users.forEach((u) => {
      u.querySelector("svg").classList.add("not-click")

    })

    users.forEach((u) => {

      if (destinoMensagem.trim() == u.querySelector("p").innerText.trim()) {
        u.querySelector("svg").classList.remove("not-click")
      }

    })

  })

  promise.then(() => {
    let contaSVG = 0;
    let users = document.querySelectorAll(".user")
    let paragrafoTodos = document.querySelectorAll(".user")[0];
    let paragrafoPublico = document.querySelectorAll(".visibilidade-container")[0];
    let paragrafoReservadamente = document.querySelectorAll(".visibilidade-container")[1];


    users.forEach((u) => {
      if (!u.querySelector("svg").classList.contains("not-click")) {
        contaSVG++

      }
    })

    if (contaSVG > 0) {

    } else {
      destinoMensagem = "Todos"
      paragrafoTodos.querySelector("svg").classList.remove("not-click")
      privacidadeMensagem = "message";
      paragrafoReservadamente.querySelector("svg").classList.add("not-click")
      paragrafoPublico.querySelector("svg").classList.remove("not-click")

      validaModal()
      montaParagrafo()

    }
  })
/*
  promise.then(() => {

    let paragrafoTodos = document.querySelectorAll(".user")[0];
    let paragrafoPublico = document.querySelectorAll(".visibilidade-container")[0];

    if(destinoMensagem == "Todos" && privacidadeMensagem == "message"){
      paragrafoTodos.querySelector("svg").classList.remove("not-click")
      paragrafoPublico.querySelector("svg").classList.remove("not-click")
    }


  })
*/

  console.log("chamei")

  validaModal()

  montaParagrafo();
}

setInterval(montaModal, 10000);



// !!!!!!!!!!!!!!!!!!!!!

/*
function atualizaModal() {
  let modal = document.querySelector(".user-container");
  modal.innerHTML = "";
  modal.innerHTML += `<div onclick="selecionaContato(this)" class="user"> <p>  <ion-icon name="people"></ion-icon> Todos</p>


                <svg class="svg-person-click  " width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L4.7 9L2 6.375" stroke="#28BB25" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>  
                </div>`;

  const promise = axios.get(link);
  promise.then((res) => {
    let usuarios = res.data;
    usuarios.forEach((usuario) => {
      modal.innerHTML += `<div onclick="selecionaContato(this)" class="user"> <p  > <ion-icon name="people"></ion-icon> ${usuario.name}</p>  
            
                     <svg class="svg-person-click not-click " width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2L4.7 9L2 6.375" stroke="#28BB25" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>  
            </div> `;
    });
  });

  promise.then(() => {
    let modais = document.querySelectorAll(".user");
    let destinoMensagemTratada = destinoMensagem.trim();

    

      modal.querySelector("svg").classList.add("not-click");

      if (modal.querySelector("p").innerText == destinoMensagemTratada) {
        modal.querySelector("svg").classList.remove("not-click");
        temSvg = true;
        
      }

    });

    if (!temSvg) {
      alteraModalTodos();
    }

  };

*/



console.log(destinoMensagem)
console.log(privacidadeMensagem)



function alteraModalTodos() {
  let modalTodos = document.querySelectorAll(".user")[0];




  let paragrafoPublico = document.querySelectorAll(".visibilidade-container")[0];
  let paragrafoReservadamente = document.querySelectorAll(".visibilidade-container")[1];

  paragrafoPublico.querySelector("svg").classList.remove("not-click")
  paragrafoReservadamente.querySelector("svg").classList.add("not-click")

  modalTodos.querySelector("svg").classList.remove("not-click");

  destinoMensagem = "Todos";
  privacidadeMensagem = "message";

  montaParagrafo();
  console.log("chamou");
}


function selecionaContato(elemento) {
  let user = elemento.querySelector("p").innerText;
  destinoMensagem = user;

  let paragrafoTodos = document.querySelectorAll(".user")[0];
  paragrafoTodos.querySelector("svg").classList.add("not-click");

  let paragrafoPublico = document.querySelectorAll(".visibilidade-container")[0];
  let paragrafoReservadamente = document.querySelectorAll(".visibilidade-container")[1];

  if (elemento.querySelector("svg").classList.contains("not-click")) {
    let paragrafoParaRemover = document.querySelectorAll(".user");
    paragrafoParaRemover.forEach((e) => {
      e.querySelector("svg").classList.add("not-click");
    });

    elemento.querySelector("svg").classList.remove("not-click");
  } else if (!elemento.querySelector("svg").classList.contains("not-click")) {
    elemento.querySelector("svg").classList.remove("not-click");
  }
  /* !!!!!!!
    if (paragrafoTodos.querySelector("svg").classList.contains("not-click")) {
      paragrafoReservadamente.querySelector("svg").classList.remove("not-click");
      paragrafoPublico.querySelector("svg").classList.add("not-click");
  
      privacidadeMensagem = "private_message";
    }
  
    */
  if (!paragrafoTodos.querySelector("svg").classList.contains("not-click")) {
    paragrafoReservadamente.querySelector("svg").classList.add("not-click");
    paragrafoPublico.querySelector("svg").classList.remove("not-click");
    console.log("todos esta clicado");
    privacidadeMensagem = "message";
  }


  validaModal()

  montaParagrafo();
}

function selecionaVisibilidade(elemento) {
  let visibilidadeParagrafo = document.querySelectorAll(".visibilidade-container")[0];
  visibilidadeParagrafo.querySelector("svg").classList.add("not-click");

  let valorParagrafo = elemento.querySelector("p").innerText;

  let paragrafoTodos = document.querySelectorAll(".user")[0];
  let paragrafosVisibilidade = document.querySelectorAll(".visibilidade-container");
  let paragrafoPublico = document.querySelectorAll(".visibilidade-container")[0];
  let paragrafoReservadamente = document.querySelectorAll(".visibilidade-container")[1];
  //let paragrafoReservadamente = document.querySelectorAll(".user")[1]
  switch (valorParagrafo) {
    case " Público":
      privacidadeMensagem = "message";
      /*
            paragrafos.forEach((paragrafo) => {
              paragrafo.querySelector("svg").classList.add("not-click");
            });
      */
      //paragrafoTodos.querySelector("svg").classList.remove("not-click");


      montaParagrafo();
      break;
    case " Reservadamente":
      privacidadeMensagem = "private_message";
      paragrafoTodos.querySelector("svg").classList.add("not-click");
      paragrafoReservadamente
        .querySelector("svg")
        .classList.remove("not-click");
      //destinoMensagem = paragrafos[1].querySelector("p").innerText
      montaParagrafo();
      break;
  }

  if (elemento.querySelector("svg").classList.contains("not-click")) {
    let paragrafos = document.querySelectorAll(".visibilidade-container");
    paragrafos.forEach((paragrafo) => {
      paragrafo.querySelector("svg").classList.add("not-click");
    });
    elemento.querySelector("svg").classList.remove("not-click");
  }

 


  validaModal()

  montaParagrafo();
}

function validaModal() {

  let users = document.querySelectorAll(".user")
  let user1 = document.querySelectorAll(".user")[1]

  let paragrafoPublico = document.querySelectorAll(".visibilidade-container")[0];
  let paragrafoReservadamente = document.querySelectorAll(".visibilidade-container")[1];
  let paragrafoTodos = document.querySelectorAll(".user")[0]

  let paragrafosVisibilidade = document.querySelectorAll(".visibilidade-container");






  let contaSVG = 0;

  users.forEach((u) => {
    if (!u.querySelector("svg").classList.contains("not-click")) {
      contaSVG++

    }
  })

  if (contaSVG > 0) {
    console.log("tem")
  } else {
    if (user1) {
      user1.querySelector("svg").classList.remove("not-click")
      destinoMensagem = user1.querySelector("p").innerText
    } else {
      paragrafoTodos.querySelector("svg").classList.add("not-click")
    }
  }


  if (destinoMensagem.trim() == "Todos" && privacidadeMensagem == "private_message") {
    
    alert("A mensagem para todos deve ser publica")

    destinoMensagem = "Todos"
    privacidadeMensagem = "message"
    paragrafoTodos.querySelector("svg").classList.remove("not-click")
 
    paragrafosVisibilidade.forEach((paragrafo) => {
      paragrafo.querySelector("svg").classList.add("not-click")
      paragrafoPublico.classList.remove("not-click")
      
    })
    paragrafoPublico.classList.remove("not-click")
      

  } 

  if(destinoMensagem == "Todos" && privacidadeMensagem == "message"){
    paragrafoTodos.querySelector("svg").classList.remove("not-click")
    paragrafoPublico.querySelector("svg").classList.remove("not-click")
  }
  
/*
  console.log(destinoMensagem)
  console.log(privacidadeMensagem)
*/


}


function montaParagrafo() {
  let paragrafo = document.querySelector(".text-footer p");

  privacidadeMensagemAux = "";
  if (privacidadeMensagem === "private_message") {
    privacidadeMensagemAux = "reservadamente";
  } else {
    privacidadeMensagemAux = "público";
  }

  let usuarios = document.querySelectorAll(".user");
  usuarios.forEach((u) => {
    if (!u.querySelector("svg").classList.contains("not-click")) {
      auxilioMontaParagrafo = u.querySelector("p").innerText;
    }
  });
  paragrafo.innerHTML = `Enviando para ${destinoMensagem} (${privacidadeMensagemAux})`;
}

function mandaMensagem() {
  let mensagem = document.querySelector("input").value;
  let placeholder = document.querySelector("input");
  const promise = axios.post(linkMessage, {
    from: nome,
    to: destinoMensagem,
    text: mensagem,
    type: privacidadeMensagem,
  });
  promise.then(() => {
    fazOGet();
    placeholder.value = "";
  });
}

function pegaNome() {
  let nome = prompt("Qual seu nome");

  return nome;
}

let nome = pegaNome();

function fazOPost(nome) {
  const promise = axios.post(link, { name: nome });
  promise.then((res) => {
    console.log("teste post", res.data);
    fazOGet();
  });
  promise.catch(errorPost);
}

setInterval(manterOnline, 5000);
setInterval(fazOGet, 2000);

function manterOnline() {
  const promise = axios.post(linkStatus, { name: nome });
  promise.then((res) => { });
}

function fazOGet() {
  const promessa = axios.get(linkMessage);
  promessa.then(buscaMensagem);
  promessa.catch(errorMessage);
}

function errorMessage(erro) {
  console.log(erro.message);
}

function errorPost(erro) {
  if (erro.message === "Request failed with status code 400") {
    alert("Nome repetido");
    window.location.reload();
  } else {
    console.log(erro.message);
  }
}

function buscaMensagem(resposta) {
  let contentContainer = document.querySelector(".content-container");

  let respostaData = resposta.data;

  let corpoMensagem;

  contentContainer.innerHTML = "";

  let spanFrom = document.createElement("span");
  spanFrom.innerHTML = "";

  respostaData.forEach((item) => {
    let classeMensagem;

    switch (item.type) {
      case "status":
        classeMensagem = "message-status";
        corpoMensagem = false;
        spanFrom.innerHTML = item.from;
        break;
      case "message":
        classeMensagem = "message-all";
        corpoMensagem = ` <span class="not-strong" >para </span> ${item.to}: `;
        spanFrom.innerHTML = `${item.from} `;
        break;
      case "private_message":
        classeMensagem = "message-private";
        corpoMensagem = ` <span class="not-strong" >enviado reservadamente para</span>  ${item.to}: `;
        spanFrom.innerHTML = `${item.from} `;
        break;
    }

    let spanCorpoMensagem = document.createElement("span");
    spanCorpoMensagem.innerHTML = corpoMensagem;

    let divMensagem = document.createElement("div");
    divMensagem.className = `message ${classeMensagem}`;

    let spanHora = document.createElement("span");
    spanHora.className = "hora";
    spanHora.innerHTML = ` (${item.time})`;

    divMensagem.appendChild(spanHora);
    divMensagem.appendChild(spanFrom);
    if (corpoMensagem) {
      divMensagem.appendChild(spanCorpoMensagem);
    }

    divMensagem.innerHTML += item.text;

    contentContainer.appendChild(divMensagem);

    divMensagem.scrollIntoView();
  });
}

fazOPost(nome);
