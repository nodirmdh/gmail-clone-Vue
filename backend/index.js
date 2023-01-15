const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client('90949419536-t59ofqf5cetrgkrl5krpa5ht01lgknf1.apps.googleusercontent.com')

app.use(bodyParser.json())
app.use(cors())

app.post('/api/google-login', async (req, res) => {

    const data = await client.verifyIdToken({
        idToken:req.body.token
    })

    res.status(200).json(data.getPayload())

})

app.listen(4001, () => {
    console.log('Server is Ready at http://localhost:4001')
})