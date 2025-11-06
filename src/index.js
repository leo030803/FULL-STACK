import express, { request, response } from "express"
import cors from "cors"
import { persons } from "./persons.js"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
    response.json(persons)

})

app.post("/cadastrar", (request,response) => {

    const { name, email, age, nickname, password } = request.body.user

    console.log(`${name}, ${email}, ${age}, ${nickname}, ${password}`)

    // cadastrar o backend

    response.status(201).json({ message: "Usuário cadastrado com sucesso!" })


} )

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}!`)
})