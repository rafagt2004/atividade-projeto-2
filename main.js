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
    const nome = document.getElementById('nome-contato');
    const telefone = document.getElementById('telefone');
    if(arrayNome.includes(nome.value.trim()) || arrayTelefone.includes(telefone.value.trim())){
        alert('Já possiu esse contato!')
    }else{
        arrayNome.push(nome.value.trim());
        arrayTelefone.push(telefone.value.trim())
        
        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += '</tr>';
        
        listaDeContatos += linha;
        
        document.querySelector('tbody').innerHTML = listaDeContatos;
    }
    // nome.value = '';
    // telefone.value = '';
    
}


function totalContatos(){
    const quantidadeContatos = document.querySelectorAll('tbody tr').length;
    document.querySelector('#total-contatos').innerHTML = quantidadeContatos;
}