const Ninja = require("./Ninja");

class Sensei extends Ninja {
    constructor() {
        super(); //Llama al constructor de la clase Ninja para heredar sus atributos
        this.nombre = "Sensei";
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduría = 10;
    }

    speakWisdom() {
        super.drinkSake(); //llama a drinkSake() de la clase padre
        console.log("La duda es el origen de la sabiduría");
    }
}

//crear una instancia de sensei y probar los metodos
const miSensei = new Sensei();
miSensei.sayName();
miSensei.showStats();
miSensei.speakWisdom();
miSensei.showStats(); //verificar que la salud ha aumentado despues de llamar a drinksake()