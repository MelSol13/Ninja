class Ninja {
    constructor(nombre, salud, velocidad, fuerza,){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

sayName(){
    console.log(`Este es el nombre del Ninja= ${this.nombre}`);
}
showStats(){
    console.log(`Salud: ${this.salud}, Velocidad:${this.velocidad}, Fuerza:${this.fuerza}`);
}
drinkSake(){
    console.log(`${this.salud += 10}`);
}

}

module.exports= Ninja;