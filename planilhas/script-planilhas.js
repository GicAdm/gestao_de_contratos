document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('permissao') == "visualizar_mc") {
        const adicionar = document.getElementById('adicionar');
        const alterar = document.getElementById('alterar');
        const excluir = document.getElementById('desativar');

        adicionar.style.backgroundColor = '#f8f8ff';  // Nova cor de fundo
        adicionar.disabled = true;

        alterar.style.backgroundColor = '#f8f8ff';  // Nova cor de fundo
        alterar.disabled = true;

        excluir.style.backgroundColor = '#f8f8ff';  // Nova cor de fundo
        excluir.disabled = true;
    }
});

function adicionar(){
    alert("ADICIONAR")
}

function alterar(){
    alert("ALTERAR")
}

function desativar(){
    alert("DESATIVAR")
}

function voltar(){
    window.location.href = '../paineis_entrada/' + localStorage.getItem('painel');
}

function pesquisar(){
    alert("PESQUISAR")
}

function filtrar(){
    alert("FILTRAR")
}

