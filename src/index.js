import express, { request, response } from "express"
import cors from "cors"

const app = express()
const port = 3333

app.use(cors())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
    response.json({ message: "Só sei, que nada sei." })

})

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}!`)
})