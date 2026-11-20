var sequelize = require('sequelize')
var productoModelo = require('./models/producto')

// CONEXION CON LA BASE DE DATOS
const conexion = new sequelize('productosdsm1','root','aaron2005',{
    host: 'localhost',
    port:'3306',
    dialect:'mysql'
});

// ESTABLECER QUE EL MODELO SE ESTABLESCA EN LA BASE DE DATOS
const producto = productoModelo(conexion);

// MENSAJE DE CONEXION
conexion.sync({force:false}) // peticion asincrona 
.then(()=>{
    console.log("Conectado exitosamente con la Base de Datos")
})

// MENSAJE DE ERROR CON UN CATCH
.catch((e)=>{
    console.log("ERROR con la conexion con la base de datos: " + e)
});

module.exports = {
    producto
}