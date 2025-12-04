import express, { request, response } from "express"
import cors from "cors"
import mysql from "mysql2"


const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = process.env

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
    
    const selectCommand = `
    
     SELECT name, email, age, nickname
     FROM leonardobraga_02ta
    
    ` 
    
    database.query(selectCommand, (error, users) => {

      if (error) {

        console.log(error)
        return

      }
      
      
      response.json(users)
    
    })
    
    
    
    

})

app.post("/cadastrar", (request,response) => {

    const { name, email, age, nickname, password } = request.body.user})

    // cadastrar o backend

    const insertCommand = `
    
       INSERT INTO leonardobraga_02ta(name, email, age, nickname, password)
       VALUES (?, ?, ?, ?, ?)
    `

    database.query(insertCommand, [name, email, age, nickname, password], (error) => {

        if(error) {

            console.log(error)
            return
        }

        response.status(201).json({ message: "Usuário cadastrado com sucesso!" })
    })


  // rota para o login
  app.post("/login", (request, response) => {

    const { email, password} = response.body.user

    // selecionar no banco o usuário que contém o email compatível

    const selectCommand = "SELECT * FROM leonardobraga_02ta WHERE email = ?"

    database.query(selectCommand, [email], (error, user) => {
       
      if (error) {

       console.log(error)
       return

      }

      // user => array [ {name, email} ]
      // tamanho do array = array.lenght = user.lenght = 1

      // verificar se o usuário existe e se a senha está incorreta
       
       if (user.length === 0 || user(0).password !== password) {
          
        response.json({ message: "Usuário ou senha incorretos!"})

       }

    })

  })





app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}!`)
})

const database = mysql.createPool({

  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  connectionLimit: 10

})