/*Importacion de clases  */
import {Cliente} from './cliente.js'
import {CuentaCorriente} from'./cuentaCorriente.js';

const cliente = new Cliente('Leonardo', '103699520','123');
const cliente2 = new Cliente('Andres','2525212128','1234');

const cuentaDeLeornado = new CuentaCorriente(cliente, '1', '001');
const cuentaDeAndres = new CuentaCorriente(cliente2, '2', '002');

let saldoCuenta = cuentaDeLeornado.verSaldo();

saldoCuenta = cuentaDeLeornado.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);