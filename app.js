let body = document.querySelector('body');
let textNota = document.querySelector('#textNota');
let ulNotas = document.querySelector('#ulNotas');
let modal = new bootstrap.Modal( document.querySelector('#modalNota') );
let fecha = new Date().toLocaleDateString();

let pFecha = document.querySelector('#pFecha');

pFecha.innerText = 'Hoy es ' + fecha;

function guardar(){
    let nota = textNota.value;
    console.log(nota);
 
    ulNotas.innerHTML += 
        `<li onclick="completar(this)" class="list-group-item d-flex justify-content-between align-items-center">
            ${nota}
            <span onclick="eliminar(this)" class="badge text-bg-danger rounded-pill">X</span>
        </li>`;

    modal.hide();

    textNota.value = '';
}

function completar(li) {
    li.classList.toggle('completo');
}

function eliminar(li){
    li.parentNode.remove()
}