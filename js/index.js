function buscadorDeImagenes(event) {
    event.preventDefault();
    let cantidad = document.querySelector('#cantidad').value;
    let url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

    let config = {
        method: "GET"
    };
    fetch(url, config)
        .then(response => {
            if(response.ok){
                return (response.json())
            }
            else{
                throw Error( "El sitio no fue encontrado 404" + respuesta.statusText);
            }
        })
        .then( jsonResponse =>{
            let resultados =document.querySelector('.resultados');
            resultados.innerHTML="";
            for(let i=0;i<jsonResponse.message.length; i++){
                resultados.innerHTML+= `<div>
                                            <img src="${jsonResponse.message[i]}" alt="imagen de un perrito">
                                        </div>`
            }
        }).catch(error =>{
            let resultados =document.querySelector('.resultados');
            resultados.innerHTML(error);
        });
}

async function buscadorDeImagenesDePerritoAsync( event){
    event.preventDefault();
    let cantidad = document.querySelector('#cantidad').value;
    let url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

    let config = {
        method: "GET"
    };
    try{

        let respuesta = await fetch(url,config);
        if(respuesta.ok){
            let jsonResponse = await respuesta.json();
            let resultados =document.querySelector('.resultados');
            resultados.innerHTML="";
            for(let i=0;i<jsonResponse.message.length; i++){
                resultados.innerHTML+= `<div>
                                            <img src="${jsonResponse.message[i]}" alt="imagen de un perrito">
                                        </div>`
            }
        }
        else{
            throw Error( "El sitio no fue encontrado 404" + respuesta.statusText);
        }
    }
    catch(error){
        let resultados =document.querySelector('.resultados');
        resultados.innerHTML=error;
    }
}

let dogForm = document.querySelector('.dogForm');
dogForm.addEventListener('submit', buscadorDeImagenes);

