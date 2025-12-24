require("dotenv").config();
const express = require("express");
const port = process.env.PORT_ABACAXI || 3000;
const app = express();
app.use(express.json());
const idPessoas = [];

app.get("/meuCaminho", (request, response) => {
    response.status(200).json({
        msg: "lista de todos os ids: " + idPessoas,
    })
})

app.post("/pessoa", (req, res) =>{
    const { id } = req.body;
    idPessoas.push(id);

    res.status(201).json({
        mgg: "id cadastrados",
        idPessoas: idPessoas,
    });

});

app.listen(port, () => {
    console.log(`Serviço, rodando na porta ${port}`);
});