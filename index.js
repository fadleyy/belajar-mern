const express = require('express');

const app = express();
const router = express.Router();

router.get('/author', (req, res) => {
    res.json({
        name: "fadli",
        email: "fadli@gaga.go"
    })
    console.log({
        reqUrl: req.originalUrl,
        reqMethod: req.method
    })
})

app.use('/', router)

app.listen(4000)