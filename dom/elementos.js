const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Texto agregado a la lista";
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);

