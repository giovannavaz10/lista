const express = require("express");
const app = express();
app.set ('view engine', 'ejs');

app.get("/",(req, res) => {
   // res.send("bem vindo ao meu site!");
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    var musica = [
        {nome: "infinit", preço: 10},
        {nome: "deixe-me ir", preço: 10},
        {nome: "poesia acustico", preço: 5},

    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "efg",
        msg: exibirMsg,
        musica: musica
       
    });

});

app.listen(8080,()=>{console.log("app rodando!");});