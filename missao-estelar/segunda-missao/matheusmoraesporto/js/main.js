//Segunda Missão Estelar JS

/*
    Apertem os cintos 
    para adentramos ao hiper-espaço
     rumo a uma nova Missão Estelar JS!:)
*/

var missao = "Segunda Missão Estelar JS";
console.log("Valor da variável missao: " + missao);
console.log("Tipo da variável missao: " + typeof missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Valor da variável hiperespaco: " + hiperespaco);
console.log("Tipo da variável hiperespaco: " + typeof hiperespaco);

var nomeCliente = "Obi-Wan Kenobi",
    renda = 1000000.99,
    dataNascimento = new Date('2000-01-01'),
    ativo = true;

function exibirDadosClienteVariaveis() {
    var stringParaAtivo = ativo ? "Sim" : "Não";
    console.log("\nNome: " + nomeCliente +
        "\nRenda: " + renda +
        "\nData de nascimento: " + dataNascimento +
        "\nAtivo: " + stringParaAtivo
    );
}

var clienteArray = [
    nomeCliente = "Anakin Skywalker",
    renda = 10000000.0,
    dataNascimento = new Date('2001-02-29'),
    ativo = false
];

function exibirDadosClienteArray() {
    for (const propriedade of clienteArray) {
        console.log(propriedade);
    }
}

var clienteObject = {
    nomeCliente: "Luke Skywalker",
    renda: 10000000.0,
    dataNascimento: new Date('2051-07-11'),
    ativo: true
}

function exibirDadosClienteObjeto() {
    for (const propriedade in clienteObject) {
        switch (propriedade) {
            case "nomeCliente":
                console.log("Nome: " + clienteObject[propriedade]);
                break;

            case "renda":
                console.log("Renda: " + clienteObject[propriedade]);
                break;

            case "dataNascimento":
                console.log("Data de nascimento: " + clienteObject[propriedade]);
                break;

            case "ativo":
                var valorDeAtivo = clienteObject[propriedade] ? "Sim" : "Não";
                console.log("Ativo: " + valorDeAtivo);
                break;

            default:
                console.log("Dado não encontrado.");
                break;
        }
    }
}

exibirDadosClienteObjeto();

function retornaDataAtualFormatada(){
    var dataDeHoje = new Date(),
        dia = dataDeHoje.getUTCDay(),
        mes = dataDeHoje.getUTCMonth() + 1,
        ano = dataDeHoje.getUTCFullYear();

    return  dia.toString().length === 1 ? "0" + dia : dia + "/" 
            + mes.toString().length === 1 ? "0" + mes : mes + "/" 
            + ano;
}

console.log(retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp("Estelar"),
    textoMissao = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");

console.log(hiperEspacoRegExp.test(textoMissao));

for (let index = 0; index <= 30; index++) {
    try {
        if(index == 29){
            throw new Error("Erro index 29");
        }
    } catch (error) {
        console.log(error);
        
    } finally{
        console.log(index);
    }
}

function recebeDadosFormBoot(objFormElementos){
    console.log(Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();

    for (const el of objFormElementos) {
        var valor = el.value;
        switch (el.id) {
            case "nomeBoot":
                objDadosForm.nomeBoot = el.value;
                break;
            case "emailBoot":
                objDadosForm.emailBoot = el.value;
                break;
            case "emailPromocionalCheckBoot":
                objDadosForm.emailPromocionalCheckBoot = el.checked;
                valor = el.checked;
                break;
            case "formaContatoTelefoneRadioBoot":
                objDadosForm.formaContatoTelefoneRadioBoot = el.checked;
                valor = el.checked;
                break;
            case "formaContatoEmailRadioBoot":
                objDadosForm.formaContatoEmailRadioBoot = el.checked;
                valor = el.checked;
                break;
            case "estadoSelectBoot":
                objDadosForm.estadoSelectBoot = el.value;
                break;
            default:
                break;
        }

        //Exibe a descrição do campo e o valor
        if(el.labels[0]){
            console.log(el.labels[0].outerText + ": " + valor);
        }
    }
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(obj){
    var formHtml = document.getElementById('formHtml');

    for (const el of formHtml) {
        switch (el.id) {
            case "nomeHtml":
                el.value = obj.nomeBoot;
                break;
            case "emailHtml":
                el.value = obj.emailBoot;
                break;
            case "emailPromocionalCheckHtml":
                el.value = obj.emailPromocionalCheckBoot
                break;
            case "formaContatoTelefoneRadioHtml":
                el.checked = obj.formaContatoTelefoneRadioBoot;
                break;
            case "formaContatoEmailRadioHtml":
                el.checked = obj.formaContatoEmailRadioBoot;
                break;
            case "estadoSelectHtml":
                el.value = obj.estadoSelectBoot;
                break;
            default:
                break;
        }
    }
}