const News = require("./schema")

const seedData = require("./seeds.json")

News.remove({})
    .then(() => {
        return News.collection.insert(seedData)
    })
    .then(() =>  {
        process.exit()
})
