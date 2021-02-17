
class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    verinfo() {
        document.write(`Soy un ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color} <br>`);
    }
};
class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }
    ladrar() {
        alert(`Esta Ladrando el ${this.raza}`);
    }
};

const perro = new Perro("Perro", 5, "negro", "Chiguagua");
perro.verinfo();
perro.ladrar();
