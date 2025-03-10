// função para deixar usuário adicionar nomes repetidos ou vazios
function validacaoInput(amigo) {
    if (amigo == '') {
        alert('Por favor digite um nome válido');
        return;
    } else if (listaAmigos.includes(amigo)) {
        alert(`o nome "${amigo}" já foi adicionado, por favor insira um nome diferente!`);
        return;
    } else {
        return amigo;
    }
      
}

function adicionar() {
    // resgatar nome do amigo e guarda no final de uma array
    let nomeAmigo = document.getElementById('nome-amigo');
    // validando entrada do usuário
    if (validacaoInput(nomeAmigo.value) != null) {
        listaAmigos.push(nomeAmigo.value);
    }
    
    // adicionar nome dos amigos ao campo amigos incluidos
    let lista = document.getElementById('lista-amigos');
    if (lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    } 
    
    // limpar campo nome Amigo
    nomeAmigo.value = '';
}

 // embaralhar a array com algoritmo de Fisher-Yates
function embaralhar(array) {
    for (let indice = array.length; indice; indice--) {
        // gera um número aleatório do entre 0 e o tamanho da lista 
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // variavel auxiliar de passagem de valor que vai armazenar um elemento da lista
        const elemento = array[indice - 1];

        array[indice - 1] = array[indiceAleatorio];
        array[indiceAleatorio] = elemento;
    }
}
function sortear() {
    // sorteio só funciona se tiver + de 1 pessoa na lista
    if (listaAmigos.length > 1) {
        embaralhar(listaAmigos);
    
        // recuperar lista de sorteio
        let sorteio = document.getElementById('lista-sorteio');

        // fazer com que o amigo atual saia com o proximo amigo da lista
        for (let i = 0; i < listaAmigos.length; i++) {
            if (i == listaAmigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';  
            } else {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i + 1] + '<br>';
            }
        
        }
    } else {
        alert('Por favor adicione pelomenos 2 pessoa para que seja possível o sorteio!');
    }
   
    
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
// escopo principal
let listaAmigos = [];