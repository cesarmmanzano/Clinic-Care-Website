const { getEnabledCategories } = require("trace_events");

function sendInfos(){

    /*var nome =*/ names();
    
    /*var cpf* =*/ cpfs();

    /* var tel =*/ telephones();
    /* var gender =*/ genders();
    /* var email =*/ emails();
    /* var password = */passwords();

    // var bd = [new infos(nome,cpf,gender,data_nasc,date,password,tel,email)];
}

// function infos(name,cpf,sexo,data_nasc,senha,telefone,email){
//     this.name = name;
//     this.cpf = cpf;
//     this.sexo = sexo;
//     this.data_nasc = data_nasc;
//     this.senha = senha;
//     this.telefone = telefone;
//     this.email= email;

//     alert(nome.value)

// }

function names(){
    alert("name");
    var name = document.getElementById('registerName');
    if(name.value ==""){
        alert("Preencha o campo NOME corretamente!");
        return false;
    }else{
       return false;
    }
}

function cpfs(){
    alert("cpf");
var cpf = document.getElementById('registerCPF');
if(cpf.length <= 12 || cpf ==""){
    alert("Informar cpf corretamente!");
    return false;
}else
    return false;
}


function telephones(){
    alert("telefone");
    var tel = document.getElementById('registerTel')
    if(tel==""){
    alert("Necessario informar telefone");
    return false;
    }else{
        return false;
    }
}

function emails(){
    alert("emails");
    var email = document.getElementById("registerEmail")
    if(email==""){
        alert("Necessario informar email")
        return false;
    }else{
        return false;
    }
}

function genders(){
    alert("genero");
    var gender = document.getElementsByName("inlineDefaultRadiosExample");

    for(var i=0; i<gender.length;i++){
        if(gender[i].checked){
            return false;
        
        }else{
            alert("Escolha uma opcao")
            return false;
        }
    }
    
}

function passwords(){
    alert("senha");
    var password = document.getElementById("registerPassword");

    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    var numbers = /[0-9]/;
    var specialCharacters = /[!|@|#|$|%|(|)|_]/;

    if(password.length < 4){
        alert("Crie uma senha com o varios caracteres")
        return false;
    }

    var auxUpper =0;
    var auxLower =0;
    var auxNumber=0;
    var auxSpecial=0;

    for(var i =0; i<password.length;i++){

        if(upperCase.test(password[i]))
        auxUpper++;
        else
        alert("Falta letra maiuscula");

        if(lowerCase.test(password[i]))
        auxLower++;
        else
        alert("Falta letra minuscula");

        if(numbers.test(password[i]))
        auxNumber++;
        else
        alert("Falta numero");

        if(specialCharacters.test(password[i]))
        auxSpecial++;
        else
        alert("Falta caracteres especias");

        if(auxLower >= 1 && auxNumber >= 1 && auxUpper >= 1 && auxSpecial >= 1){
        alert("Preenchido com sucesso!");
        return false;
        }
    }
}