import express, { request, response } from "express"

const app = express()
const port = 3333

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
    response.json({ message: "Só sei, que nada sei." })

})

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}!`)
})