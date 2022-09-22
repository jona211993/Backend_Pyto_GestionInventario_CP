import { Schema,model } from 'mongoose';

const pedido = new Schema({
    codigo: Number,
    fecha: String,
    total: Number,
    estado: String,
    observacion: String,
    itemsPedido:[]
    
  // esto ultimo que coloco es para que identifique a la coleccion en la
  // que deseo trabajar, antes me creaba una nueva.
}, { collection: 'pedido' });

// El esquema ayuda a decirle a mongo db como van a lucir los datos

// CREANDO MODELOS:

let M_pedidos = model('m_pedido',pedido);
module.exports = M_pedidos;