class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.rdPantalla = rdp;
        this.rdCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (!this.encendido) {
            alert("Encendiendo Celular");
            this.encendido = true;
        } else {
            alert("El celular ya esta encendido");
        }
    }
    presionarBotonApagado() {
        if (this.encendido) {
            alert("Apagando Celular");
            this.encendido = false;
        } else {
            alert("El celular ya esta Apagado");
        }
    }
    reiniciar() {
        if (this.encendido) {
            alert("Reiniciando Celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFotos() {
        if (this.encendido) {
            alert(`Foto tomada con resolucion ${this.rdCamara}`);
        } else {
            alert("El celular esta apagado");
        }

    }
    grabarVideo() {
        if (this.encendido) {
            alert(`Grabando video con resolucion de pantalla ${this.rdPantalla}`);
        } else {
            alert("El celular esta apagado");
        }
    }
    mobileInfo() {
        return `Informacion del Celular: <br>
        Color: <b> ${this.color}</b><br>
        Peso: <b> ${this.peso}</b><br>
        Resolucion de Pantalla: <b> ${this.rdPantalla}</b><br>
        Resolucion de Camara: <b> ${this.rdCamara}</b><br>
        Ram: <b> ${this.ram}</b><br>`;
    }
}
class CelularAltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, rdcExtra) {
        super(color, peso, rdp, rdc, ram);
        this.rdcExtra = rdcExtra;
    }

    mobileInfoAltaGama() {
        return `${this.mobileInfo()}
         Resolucion de Camara Extra: <b>${this.rdcExtra}</b><br>
         `;
    }

}


const celular1 = new Celular("Rojo", "150g", "10'", "250px", "2Gb");
const celular2 = new CelularAltaGama("Azul", "100g", "20'", "600px", "4Gb", "Full HD");

document.write(celular2.mobileInfoAltaGama());

