import { Client, Databases, ID } from "appwrite";
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());



const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '[DATABASE_ID]',
    '[COLLECTION_ID]',
    ID.unique(),
    {}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})