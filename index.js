class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente {
    numeroCuenta;
    saldoCuenta;
    agenciaCuenta;

    depositoEnCuenta(valor){
        this.saldoCuenta += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "132332";
cliente1.rutCliente = "A123";
const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numeroCuenta = "232323";
cuentaCorriente1.saldoCuenta = 20000;
cuentaCorriente1.agenciaCuenta = "Bancolombia";


const cliente2 = new Cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "19804050";
cliente2. rutCliente = "S456";
const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numeroCuenta = "123434343";
cuentaCorriente2.saldoCuenta = 1000;
cuentaCorriente2.agenciaCuenta = "Banco de Bogota";


const cliente3 = new Cliente();
cliente3.nombreCliente = "María";
cliente3.dniCliente = "2324343";
cliente3.rutCliente = "L78945"
const cuentaCorriente3 = new CuentaCorriente();
cuentaCorriente3.numeroCuenta = "9829382";
cuentaCorriente3.saldoCuenta = 1000;
cuentaCorriente3.agenciaCuenta = "BBVA"

console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(300);
console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(400);
/*Las clases son bloques de contenido, informacion o datos. A estas clases se le atribuyen unos atributos que son los datos que se le especifica. La programacion con objetos es porque trae cosas del mundo real al mundo virtual.*/

/*Clases se pone en singular y en sustantivo. los objetos son instancia de la clase..

metodo es un verbo = funcion:
argumento = es lo que yo no necesito para crear la funcion
this 
funcion verbo (argumentos, parametros)
*/ 