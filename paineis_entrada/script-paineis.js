// Recupera o nome do usuário armazenado no localStorage
const nomeUsuario = localStorage.getItem('nomeUsuario');

// Verifica se o nome foi encontrado no localStorage
if (nomeUsuario) {
    // Exibe o nome do usuário na label com id "nome_usuario"
    document.getElementById('nome_usuario').innerText = nomeUsuario;
    
} else {
    // Caso o nome não tenha sido encontrado (exemplo: se o usuário não fez login)
    document.getElementById('nome_usuario').innerText = 'TEIÚ - INDÚSTRIAS';
}

const permissao = localStorage.getItem('permissao');

if(permissao = "visualizar_mc"){
    alert("oi")
}

function sair(){
    var resultado = confirm("Você tem certeza que deseja sair? \n\nAo sair da sua conta, será necessário fazer login novamente para acessar seu conteúdo.");
        if (resultado == true) {
            window.location.href = '../inicio/inicio.html'; 
            //Colocar bloqueador de voltar   
        }
}
