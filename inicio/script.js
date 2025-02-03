window.onload = function(){
    setTimeout(function() {
    document.getElementById("video").style.display = "block";
    document.getElementById("usuario").readOnly = true;
    document.getElementById("senha").readOnly = true; 
    document.getElementById("usuario").style.cursor = "default";
    document.getElementById("senha").style.cursor = "default";
}, 0);
     // Exibe o vídeo imediatamente ao carregar a página

setTimeout(function() {
    document.getElementById("video").style.display = "none";
    document.getElementById("usuario").readOnly = false;
    document.getElementById("senha").readOnly = false;
    document.getElementById("usuario").style.cursor = "text";
    document.getElementById("senha").style.cursor = "text";
    document.addEventListener('keydown', function(event) {
        // Verifica se a tecla pressionada foi "Enter"
        if (event.key === "Enter") {
            const usuarioInput = document.getElementById('usuario').value;
            const senhaInput = document.getElementById('senha').value;
            login(usuarioInput, senhaInput); // Chama a função de login
        }
    });
    
}, 5200);} // Oculta o vídeo, após intervalo de 5,2 segundos 

function login(usuarioInput, senhaInput) {
// Testa se não estão vazios
if (!usuarioInput || !senhaInput) {
    alert('Por favor, preencha todos os campos.');
    return; // Evita continuar o código sem que os campos estejam preenchidos
    }

// Carregar o JSON com os usuários
    fetch('usuarios.json')
        .then(response => response.json())  // Converte o arquivo JSON para um objeto JavaScript
        .then(data => {
        // Verifica se o usuário e senha batem com algum usuário do JSON
            const usuario = data.usuarios.find(u => u.usuario === usuarioInput && u.senha === senhaInput);

             if (usuario) {
                localStorage.setItem('nomeUsuario', usuario.nome);
                localStorage.setItem('permissao', usuario.permissao);
                localStorage.setItem('painel', usuario.painel);
                // Se encontrado, exibe um alerta e redireciona para o painel
                alert("Bem-vindo, " + usuario.nome + "!" + "\n\nRedirecionando para o Painel de Entrada.");
                window.location.href = '../paineis_entrada/' + usuario.painel;
            } else {
                // Se não encontrado, exibe mensagem de erro
                alert('Usuário ou senha incorretos! Tente novamente.');
                }
    
                // Limpa os campos de usuário e senha
                document.getElementById('usuario').value = '';
                document.getElementById('senha').value = '';
            })
            .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
    }
