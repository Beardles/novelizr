const express = require('express')
const app = express()

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(3001, () => {
    console.log('App listening on port 3001...')
})