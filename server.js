const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))

const { MongoClient } = require('mongodb')

const MONGODB_URL = 'mongodb://localhost:27017'

app.get('/products', (req, res) => {

    MongoClient.connect(MONGODB_URL, (err, client) => {
        if (err) {
            throw err
            return res.json({
                success: false,
                message: "Could not connect to MongoDB"
            })
        }
        const mycart = client.db('cartdb').collection('mycart')
        mycart.find({}).toArray((err, result) => {
            if (err)
                throw err

            result.map((item) => {
                delete item._id
            })
            res.json({
                success: true,
                data: result
            })
        })
        client.close()
    })
})
app.listen(2121, () => {
    console.log('running on http://localhost:2121')
})
<h5>mongo</h5>
