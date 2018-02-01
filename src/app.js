
 const filterLibrary = {};
  //  creo, agrego textos y atributos a los elementos nuevos
  const container = document.getElementById('mainContainer');
  const imagen = document.getElementsByTagName('img');
  console.log(imagen);  
  //const imagen = document.querySelectorAll('img');
  const body = document.getElementById('body');
  const newContainer = document.createElement('div');
  newContainer.setAttribute('id', 'mocha');
  const btnGrey = document.createElement('button');
  const greyText = document.createTextNode('GreyScale');
  btnGrey.setAttribute('class', 'btn btn-default');
  const btnSepia = document.createElement('button');
  const sepiaText = document.createTextNode('Sepia');
  btnSepia.setAttribute('class', 'btn btn-default');
  const btnHueRotate = document.createElement('button');
  const huerotateText = document.createTextNode('Hue rotate');
  btnHueRotate.setAttribute('class', 'btn btn-default');
  const btnInverse = document.createElement('button');
  const inverseText = document.createTextNode('Inverse');
  btnInverse.setAttribute('class', 'btn btn-default');
  const btnSaturate = document.createElement('button');
  const saturateText = document.createTextNode('Saturate');
  btnSaturate.setAttribute('class', 'btn btn-default');
  const btnNormal = document.createElement('button');
  const normalText = document.createTextNode('Normal');
  btnNormal.setAttribute('class', 'btn btn-default'); 
  //  apendeo los objetos creados
  body.appendChild(container);  
  body.appendChild(newContainer);
  newContainer.appendChild(btnGrey);
  btnGrey.appendChild(greyText);
  newContainer.appendChild(btnSepia);
  btnSepia.appendChild(sepiaText);
  newContainer.appendChild(btnHueRotate);
  btnHueRotate.appendChild(huerotateText);
  newContainer.appendChild(btnInverse);
  btnInverse.appendChild(inverseText);
  newContainer.appendChild(btnSaturate);
  btnSaturate.appendChild(saturateText);
  newContainer.appendChild(btnNormal);
  btnNormal.appendChild(normalText);
  /*  coloco un for para apendear cada imagen 
  *   que va apareciendo en el arreglo porque 
  *   no puedo pasar un arreglo con cosas dentro 
  *   a un contenedor, debo pasarlas de 1 en 1
  */
  for (let i = 0; i < imagen.length; i++) {
      container.appendChild(imagen[i]);
  }
  //  paso todos los elementos creados al body del html
   document.body.appendChild(newContainer);
  //  donde cargo los estilos automaticos que debe llevar la pagina
  document.body.onload = styleElement;
  function styleElement(element) {
    newContainer.style.marginLeft = '25%';
    newContainer.style.marginTop = '2%';
    btnGrey.style.marginRight = '2%';
    btnSepia.style.marginRight = '2%';
    btnHueRotate.style.marginRight = '2%';
    btnInverse.style.marginRight = '2%';
    btnSaturate.style.marginRight = '2%';
    btnNormal.style.marginRight = '2%';
  } 
  /* separacion del codigo para poder trabajar 
  *  en partes y no solo 1 funcion que contenga 
  *  todo, de este modo actualizamos de mejor 
  *  manera el trabajo en el test
  */
  filterLibrary.greyFunction = function (event) {
    console.log(event)
    if(event === null){
      console.log(event)
      return 'error';
    }
    btnGrey.addEventListener('click', ()=>{ //  todo esto se ejecuta al ejecutar el click sobre el boton con el filtro
        for (let i = 0; i < imagen.length; i++){//  realizo un for para iterar el filtro sobre todas las imagenes en el arreglo imagenes  
          imagen[i].style.filter ='grayscale(100%)'; //  aplico filtro a todas las imagen en la posicion que vaya
          const atributo = imagen[i].getAttribute('style');//  para realizar los test capturo el atributo de los elementos porque si esta el atributo entonces el filtro paso          
            if (atributo !== '') { //  compruebo que existe el atributo y que no retorne null o vacio
              const arrAttr = [atributo]; //  lo meto en un arreglo para comprobar en el test
              console.log(arrAttr); // confirmar que existe imprimo el arreglo
            } else {
              const arrAttr = ['']; //  en caso cntrario retorne un array vacio
            }          
        }      
    });
  }    
  //  aplico cada metodo a todos los filtros seleccionados
  filterLibrary.sepiaFunction = function (event) {
    btnSepia.addEventListener('click', ()=>{
      for (let i = 0; i < imagen.length; i++){
        imagen[i].style.filter ='sepia(100%)';
        const atributo = imagen[i].getAttribute('style');
        if (atributo !== '') {
              const arrAttr = [atributo];
              console.log(arrAttr);
            } else {
              const arrAttr = [''];
            }
      }      
    });
  }
  filterLibrary.hueFunction = function (event) {
     btnHueRotate.addEventListener('click', ()=>{
      for(let i = 0; i< imagen.length; i++){
        imagen[i].style.filter ='hue-rotate(90deg)';
        const atributo = imagen[i].getAttribute('style');
        if (atributo !== '') {
              const arrAttr = [atributo];
              console.log(arrAttr);
            } else {
              const arrAttr = [''];
            }
      }      
    });
  }
  filterLibrary.inverseFilter = function (event) {
    btnInverse.addEventListener('click', ()=>{
      for(let i = 0; i< imagen.length; i++){
        imagen[i].style.filter ='invert(100%)';
        const atributo = imagen[i].getAttribute('style');
        if (atributo !== '') {
              const arrAttr = [atributo];
              console.log(arrAttr);
            } else {
              const arrAttr = [''];
            }
      }      
    }); 
  }
  filterLibrary.saturateFunction = function (event) {
     btnSaturate.addEventListener('click', ()=>{
      for(let i = 0; i < imagen.length; i++){
        imagen[i].style.filter ='saturate(10)';
        const atributo = imagen[i].getAttribute('style');
        if (atributo !== '') {
              const arrAttr = [atributo];
              console.log(arrAttr);
            } else {
              const arrAttr = [''];
            }
      }      
    });
  }
  filterLibrary.normalFunction = function (event) {
     btnNormal.addEventListener('click', ()=>{
      for(let i = 0; i < imagen.length; i++){ // con un for recorro todas las imagenes que hayan al hacer click y vuelvo todo a 0
        imagen[i].style.filter ='grayscale(0%)';
        imagen[i].style.filter ='saturate(0)';
        imagen[i].style.filter ='invert(0%)';
        imagen[i].style.filter = 'hue-rotate(0deg)';
        imagen[i].style.filter ='sepia(0%)';
        const atributo = imagen[i].getAttribute('style'); // capturo el atributo dentro de la funcion click
        if (atributo !== '') {
              const arrAttr = [atributo];
              console.log(arrAttr);
            } else {
              const arrAttr = [''];
            }
      }      
    });
  }
  /* es6 funciones
  *
  */

  //  eventos asignados a todos los botones  
  filterLibrary.greyFunction();
  filterLibrary.sepiaFunction();
  filterLibrary.hueFunction();
  filterLibrary.inverseFilter();
  filterLibrary.saturateFunction();
  filterLibrary.normalFunction();
//  exportar para que se pueda usar en otro js
//  es5 export
if(typeof exports !== 'undefined') {
   exports.filterLibrary = filterLibrary;
}
// es6
//module.exports = filterLibrary;
