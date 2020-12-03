var contextDialog = '{}';

function sendMessageToAssistant() {
    var textMessage = document.chatForm.textMessage.value;
    chat = document.getElementById('x'); //incluir nome do form a ser utilizado

    if (textMessage === undefined || textMessage === '')
        textMessage = '';
    else
        x.innerHTML += 'Voce -->' + textMessage + '<br>';

    document.x.textMessage.value = ''; //incluir nome do form a ser utilizado

    //Post para o serviço da ibm
    $.post("/ibmWatson/assistant",
        { text: textMessage, contextDialog },

        function (returnedData, statusRequest) {
            if (returnedData.status === 'ERRO') alert(returnedData.data);
            else {
                x.innerHTML += 'ChatBot --> ' + returnedData.data.result.output.text + '<br>'; //incluir nome do form a ser utilizado
                contextDialog = JSON.stringify(returnedData.data.result.context);
            }
        }
    )

        .fail(function (returnedData) {
            alert('Erro: ' + returnedData.status + ' ' + returnedData.status.statusText);
        });
}

$(document).keypress(
    function (event) {
        if (event.which == '13') {
            event.preventDefault();
            sendMessageToAssistant();
        }
    }
);

$(document).ready(function () {
    sendMessageToAssistant();
});