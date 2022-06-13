const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51L8BcBAbBgly49yS63pUiBHBP0kvZ8IQLx3XPIYSWYGGGR8IQe9S4CrlqaqoShP20RmOkwR8mxUfkEkqthcjEruw00Tu8iWkH3')

//API

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello worlds'))
app.post('payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request fucking recieved for >>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listen command

exports.api = functions.https.onRequest(app)

//jus so i dont loose it-example endpoint
//http://localhost:5001/clone-dinoko/us-central1/api 