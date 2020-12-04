const { getEnabledCategories } = require("trace_events");

function infos(name,cpf,sexo,data_nasc,senha,telefone,email){
    this.name = name;
    this.cpf = cpf;
    this.sexo = sexo;
    this.data_nasc = data_nasc;
    this.senha = senha;
    this.telefone = telefone;
    this.email= email;
}

var sexo = document.getElementsByName('gender');
for(var i; i<gender.length;i++){
    if(gender[i].checked){
        sexo = gender[i].value;
    }
}

var name = document.getElementsByName('Name');
var cpf = document.getElementsByName('CPF');

var data_nasc = document.getElementsByName('date_nasc')
var data = document.getElementsByName('Date');
var password = document.getElementsByName('Password');
var tel = document.getElementsByName('Telefone');
var email = document.getElementsByName('E-mail');

var bd = [
    new infos(name,cpf,sexo,data_nasc,data,password,tel,email)
];