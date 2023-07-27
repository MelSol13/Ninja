class Ninja {
    constructor(nombre, salud, velocidad, fuerza,sabiduría){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
        this.sabiduría = sabiduría;
    }

sayName(){
    console.log(`Este es el nombre del Ninja= ${this.nombre}`);
}
showStats(){
    console.log(`Salud: ${this.salud}, Velocidad:${this.velocidad}, Fuerza:${this.fuerza}, Sabiduría:${this.sabiduría}`);
}
drinkSake(){
    console.log(`${this.salud += 10}`);
}

}

module.exports= Ninja;