const express =  require('express');
const app = express();


app.get('/', (req, res) => {
    return res.send('Xin chao toi ten la Hoang')
})

app.listen(3000)

