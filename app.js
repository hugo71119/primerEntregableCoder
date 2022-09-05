const form = document.querySelector('.formulario')
const btn = document.querySelector('.alerta')
const valor = document.querySelector('.valor')


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const valorNew = valor.value;
    const esperando = document.querySelector('.esperando');
    const esperandoSegundo = document.querySelector('.esperandoSegundo')
    let a = [];
    let b = [];

    if (valorNew === '') {
        alert('Ingresa un número')
    }

    limpiarHTML()
    limpiarHTML2()
    for (let index = 1; index <= valorNew; index++) {
        if (valorNew % index === 0) {
            a.push(index)
        }else{
            b.push(index)
        }
    }
    console.log(a)
    console.log(b)
    for (let index = 0; index < a.length; index++) {
        const parrafo = document.createElement('p')
        parrafo.classList.add('margen')
        parrafo.innerHTML = `
            <span>${a[index]}</span> 
        `

        esperando.appendChild(parrafo)
    }
    if (document.querySelector('.margen')) {
        const title = document.createElement('h3')
        title.classList.add('margen')
        const parrafillo = document.querySelector('.margen')
        title.innerText = `Números divisibles por ${valor.value}`
        esperando.insertBefore(title, parrafillo)
    }
    
    for (let index = 0; index < b.length; index++) {
        const parrafoDos = document.createElement('p');
        parrafoDos.classList.add('margen')
        parrafoDos.classList.add('margens')
        parrafoDos.innerHTML = `
            <span>${b[index]}</span>
        `
        esperandoSegundo.appendChild(parrafoDos)

    }
    if (document.querySelector('.margen')) {
        const title2 = document.createElement('h3')
        title2.classList.add('margen')
        const parrafillo = document.querySelector('.margens')
        title2.innerText = `Números NO divisibles por ${valor.value}`
        esperandoSegundo.insertBefore(title2, parrafillo)
    }

    function limpiarHTML() {
        while(esperando.firstChild){
            esperando.removeChild(esperando.firstChild)
        }
    }
    function limpiarHTML2() {
        while(esperandoSegundo.firstChild){
            esperandoSegundo.removeChild(esperandoSegundo.firstChild)
        }
    }
    

    // const esperando = document.querySelector('.esperando');
    // esperando.innerHTML = valorNew


    form.reset()

    // console.log(valorNew)
})