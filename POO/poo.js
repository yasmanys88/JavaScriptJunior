class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    verinfo() {
        document.write(`Soy un ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color} <br>`)
    }

}

const perro = new animal("Perro", 5, "negro");
perro.verinfo();
