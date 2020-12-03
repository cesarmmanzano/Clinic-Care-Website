  const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV1({
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '1.0.0',
    authenticator: new IamAuthenticator({ apikey: '' })
});

module.exports = {assistant};