
//declaracion(const persona)  e igualacion (={})
// const persona = {
//     nombre: "Fabrizio",
//     edad: 23,
// };
// console.log(persona.nombre, persona.edad);

//______________________________________________________________

// let sumar = (a,b) => {
//     return a + b
// }
// console.log(sumar(1,2));


//______________________________________________________________
// Repase lo de template string y si me salio !!!

// let nombre = "Fabrizio";
// let edad = 23;

// let cartel = `
//     Mi nombre es ${nombre} y tengo ${edad} años, RE COOL!!
// `;
// console.log(cartel);

//______________________________________________________________

class Contador {

    static cuentaGlobal = 0;


    constructor(nombreQueMePasan) { 
        this.nombreResponsable = nombreQueMePasan;
        this.cuenta = 0;

    }

    getResponsalbe(){
        // console.log(this.nombreResponsable);
        return this.nombreResponsable
    }

    getCuentaIndividual(){
        // console.log(this.cuenta);
        return this.cuenta
    }

    getCuentaGlobal(){}

    sumarCuenta(){
        this.cuenta = this.cuenta + 1;
        Contador.cuentaGlobal = Contador.cuentaGlobal + 1;
    }

}

const fabri = new Contador("fabri");
fabri.getResponsalbe();
fabri.getCuentaIndividual();
//__________________________
const guille = new Contador("guille");
guille.getResponsalbe();
guille.getCuentaIndividual();
//___________________________
const hugo = new Contador("hugo");
hugo.getResponsalbe();
hugo.getCuentaIndividual();
//___________________________
fabri.sumarCuenta();
fabri.sumarCuenta();
fabri.sumarCuenta();
fabri.sumarCuenta();
fabri.sumarCuenta();


guille.sumarCuenta();
guille.sumarCuenta();

hugo.sumarCuenta();
//__________________
console.log(fabri);
console.log(guille);
console.log(hugo);

console.log(Contador.cuentaGlobal);