const express = require('express');
const axios = require('axios');

const app = express();

const PRIVATE_APP_ACCESS = "pat-na1-ae9721c4-868f-4d5c-ba0b-8f237f0b1037";

app.get('/contacts', async (req, res) => {

    const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }

    try {
        const resp = await axios.get(contacts, { headers });
        const data = resp.data.results;
        res.json(data);      
    } catch (error) {
        console.error(error);
    }

});


app.listen(3000, () => console.log('Listening on http://localhost:3000'));