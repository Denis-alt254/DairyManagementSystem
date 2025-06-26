const express = require('express')

const app = express()
PORT = 5000

app.listen(process.env.PORT || PORT, (req, res) =>{
    console.log(`Server is running at http://localhost:${PORT}`);
})