import * as functions from "firebase-functions";

import * as admin from "firebase-admin";

admin.initializeApp();

import * as express from "express";

const app = express();

app.get("/cat", (request, response) => {
    response.send("CAT");
});

app.get("/dog", (request, response) => {
    response.send("DOG");
});

export const api = functions.https.onRequest(app);



export const basicHTTP = functions.https.onRequest((request,response) => {

    const name = request.query.name;

    if (!name) {
        response.status(400).send("Need a name");
    } else {
        response.send(`Hello ${name} from Cloud Firebase`);
    }

});

