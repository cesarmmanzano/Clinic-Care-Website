var express = require('express');
var router = express.Router();
const ibmWatson = require('../lib/ibmWatsonCredentials');

router.post('/assistant', function (req, res, next) {
    let { text, contextDialog } = req.body;
    let context = JSON.parse(contextDialog);

    const params = {
        input: { text },
        workspaceId: 'WORKSPACEID',
        context,
    }

    ibmWatson.assistant.message(
        params,
        function (err, response) {
            if (err)
                res.json({ status: 'ERRO', data: err.toString() });
            else
                res.json({ status: 'OK', data: response });
        }
    );

});

module.exports = router;
