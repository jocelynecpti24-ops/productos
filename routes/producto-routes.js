// ESTABLECER TIPO DE RUTAS 

var router = require('express').Router()
const {where} = require('sequelize')
var {producto} = require('../conexion')

// RUTA RAIS O RUTA INICIAL 
router.get('/',(req,res)=>{
    res.render('pages/index')
})

// RUTA PARA ABRIR LA PAGINA DE INCERTAR 
router.get('/insertarProducto',(req,res)=>{
    res.render('pages/insertarProducto')
})

// FUNCION QUE RESPONDE UNA PETICION, RUTA O PETICION PARA INCERTAR UN PRODUCTO NUEVO 
// post = la ruta va encapsulada, es la mas recomendada 
router.post('/guardarProducto',(req,res)=>{
    producto.create(req.body)
    .then(()=>{
        console.log("se incerto correctamente el producto")
        res.redirect("/listarProductos")
    })
    .catch((e)=>{
        console.log("ERROR al incertar: "+e)
    })

})

// RUTA O PETICION PARA OPTENER TODOS LOS PRODUCTOS
router.get('/listarProductos',(req,res)=>{
    producto.findAll()
    .then((data)=>{
        res.render('pages/listarProductos',{productos:data})
    })
    .catch((e) =>{
        console.log('ERROR en la consulta: '+e)
    })
})
//ruta para buscar un producto por su id
router.get('/buscarProducto/:idproducto',(req,res)=>{
    producto.findAll({
        where:{

            idProducto: req.params.idproducto
        }
    })
    .then((data) =>{
        res.render('pages/modificarProducto',{producto:data})
    })
    .catch((e) =>{
        console.log("ERROR en la consulta: "+e)
    })
})

// RUTA PARA MODIFICAR  UN PRODUCTO
router.post('/modificarProducto',(req,res)=>{
    var idProducto = req.body.idProducto
    const productoModificado ={
        nombreProducto: req.body.nombreProducto,
        marcaProducto: req.body.marcaProducto,
        precioProducto: req.body.precioProducto
    }
    producto.update(productoModificado,{
        where:{
            idProducto: idProducto
        }
    })
    .then(()=>{
        console.log("Producto modificado correctamente")
        res.redirect('/listarProductos')
    })
    .catch((e)=>{
        console.Console.log('ERROR al modificar: '+e)
    })
})

// RUTA PARA ELIMINAR UN PRODUCTO
router.get('/eliminarProducto/:idProducto',(req,res)=>{
    producto.destroy({
        where:{
            idProducto:req.params.idProducto
        }
    })
    .then(()=>{
        console.log("Producto eliminado correctamente")
        res.redirect("/listarProductos")
    })
    .catch((e)=>{
        console.log("ERROR. al eliminar un producto: "+e)
    })
})
// exportar todas nuestras rutas para que se guarden en ejs
module.exports = router;