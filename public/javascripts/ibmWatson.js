var contextDialog = '{}';

function sendMessageToAssistant() {
    var textMessage = document.chatForm.textMessage.value;
    chat = document.getElementById('chat'); 

    if (textMessage === undefined || textMessage === '')
        textMessage = '';
    else
        chat.innerHTML += 'Voce: ' + textMessage + '<br>';

    document.chatForm.textMessage.value = ''; 

    //Post para o serviço da ibm
    $.post("/ibmWatson/assistant",
        { text: textMessage, contextDialog },

        function (returnedData, statusRequest) {
            if (returnedData.status === 'ERRO') 
                alert(returnedData.data);
            else {
                chat.innerHTML += 'Chatbot: ' + returnedData.data.result.output.text + '<br>'; 
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