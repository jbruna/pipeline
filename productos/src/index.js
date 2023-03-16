import express from 'express';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())
const products ={}

//ruta de indice
app.get('/productos',(req, resp) =>{
    resp.send(products)
})

app.post('/productos',(req,res) =>{
    const id=randomBytes(4).toString('hex')
    const { name } =req.body
    products [id]={
        id,
        name
    }
    res.status(201).send(products[id])
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})