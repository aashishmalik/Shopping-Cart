const { MongoClient } = require('mongodb')

const MONGODB_URL = 'mongodb://localhost:27017'

MongoClient.connect(MONGODB_URL, (err, client) => {

    if (err)
        throw err
    const mycart = client.db('cartdb').collection('mycart')

    mycart.insertMany([{
        name: "Apple x",
        price: 100000,
        rating: 4.8,
        owner: "Apple inc"
    },
    {
        name: "MI x",
        price: 10000,
        rating: 4.8,
        owner: "MI inc"

    },
    {
        name: "Samsung S6",
        price: 50000,
        rating: 4.4,
        owner: "Samsung inc"

    },
    {
        name: "Honor hx",
        price: 70000,
        rating: 4.8,
        owner: "Honor inc"

    },
    {
        name: "Oppo x",
        price: 20000,
        rating: 4.2,
        owner: "Oppo"

    }
    ], (err, result) => {
        if (err)
            throw err
        console.log("DATA INSERTED SUCCESSFULLY")    
    })

})