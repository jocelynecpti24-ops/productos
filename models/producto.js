var sequelize = require("sequelize")
// esquema de base de datos 
module.exports = (conexion) => {
    const ProductoSchema = conexion.define('producto',{
        idProducto: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreProducto: {
            type:sequelize.STRING
            
        },    
        marcaProducto:{
            type: sequelize.STRING
        
        },
        presioProducto:{
            type:sequelize.DOUBLE
        }
    });
    return ProductoSchema;
}