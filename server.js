// SERVIDOR 
var express = require("express")
var productoRoutes = require("./routes/producto-routes")

var app = express()

// MOTOR DE VISTAS 
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))

app.use('/',productoRoutes)

// PUERTO, VALIDAR QUE ENCUENTR UN PUERTO LIBRE O SI NO QUE UTILIZE EL 3000
var port = process.env.port || 3000
app.listen(port,()=>{
    console.log("Servidor iniciado en el puerto: "+port)
})

