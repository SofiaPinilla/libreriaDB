const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())//para que el body no sea undefined

app.use("/genres",require("./routes/genres"))
app.use("/books", require("./routes/books"))


app.listen(PORT,()=> console.log(`Server started on port: ${PORT}`))