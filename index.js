class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente {
    numeroCuenta;
    #saldoCuenta;
    agenciaCuenta;

    constructor(){
        this.#saldoCuenta = 0;
        this.numeroCuenta = '';
        this.agenciaCuenta = '';
    }

    depositoEnCuenta(valor){
        if (valor > 0);
            this.#saldoCuenta += valor;

            return this.#saldoCuenta;
    }

    retiroEnCuenta(valor){
        if (valor <= this.#saldoCuenta)
            this.#saldoCuenta -= valor;

            return this.#saldoCuenta;
    }


    verSaldo() {
        return this.#saldoCuenta;
    }

}

cuentaDeLeornado = new CuentaCorriente();

let saldoCuenta = cuentaDeLeornado.verSaldo();
console.log('El Saldo Actual es '+saldoCuenta);

saldoCuenta = cuentaDeLeornado.depositoEnCuenta(100);
console.log('El Saldo Actual es '+saldoCuenta);

saldoCuenta = cuentaDeLeornado.retiroEnCuenta(50);
console.log('El Saldo Actual es '+saldoCuenta);

/*Las clases tienen un comportamiento llamado constructor que se genera cuando se crea una instancia

Atributos privados --js
#atributo, solo la clase lo puede hacer

_ tambien trata como privado entre desarrolladores

return es un valor que se devuelve cuando se completa uhna funcion  */ 