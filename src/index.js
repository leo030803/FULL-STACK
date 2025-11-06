import express, { request, response } from "express"
import cors from "cors"
import { persons } from "./persons.js"

const app = express()
const port = 3333

app.use(cors())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
    response.json(persons)

})

app.post("/cadastrar", (request,response) => {

    console.log(request)


} )

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}!`)
})