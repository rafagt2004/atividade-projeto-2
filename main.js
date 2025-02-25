const form = document.getElementById('form-cadastro');
const arrayNome = [];
const arrayTelefone = [];

let listaDeContatos = '';   

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adiconarContato();
    totalContatos();
    
});

function adiconarContato(){
    const nome = document.getElementById('nome-contato').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    if(arrayNome.includes(nome) || arrayTelefone.includes(telefone)){
        alert('Já possiu esse contato!')
    }else{
        arrayNome.push(nome);
        arrayTelefone.push(telefone)
        
        let linha = '<tr>';
        linha += `<td>${nome}</td>`;
        linha += `<td>${telefone}</td>`;
        linha += '</tr>';
        
        listaDeContatos += linha;
        
        document.querySelector('tbody').innerHTML = listaDeContatos;
    }
    
}


function totalContatos(){
    const quantidadeContatos = document.querySelectorAll('tbody tr').length;
    document.querySelector('#total-contatos').innerHTML = quantidadeContatos;
}