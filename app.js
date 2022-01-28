document.oncontextmenu = function(){return false;}
document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }


});


//DIV TOGGLE
//ocultar o mostrar
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

//ADD ITEM
const addItemInput = document.querySelector('#addItem');
const addItemButton = document.querySelector('button#addItemButton');

//eliminar ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');
//eliminar elemento seleccionado
const removeItem = document.querySelector('button#removeItem');
  


//agregar con enter
addItemInput.addEventListener('keypress',(e)=>{
  if (13 == e.keyCode) {
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    list.appendChild(li); //agregar elemento a la lista
    addItemInput.value="";
 }
 
});

//mostrar y ocultar lista
hide.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block';
    hide.textContent = '<<';
   } else {
    listDiv.style.display = 'none';
    hide.textContent = '>>';
   }
});

//agregar elementos a la lista
addItemButton.addEventListener('click', () => {
  let list = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  list.appendChild(li); //agregar elemento a la lista
  addItemInput.value="";
});


//eliminar ultimo elemento de la lista
removeItemButton.addEventListener('click', () => {
  let list = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  list.removeChild(li);
});


let index = 0;//incializar variable


//eliminar elemento seleccionado
removeItem.addEventListener('click', () => {
  let showDiv = document.getElementById('list');
  let divAlert = document.createElement('div');
  let label = document.createElement('label');
  label.innerHTML= 'Se elimino el elemento '+index;
  divAlert.classList.add('alert', 'alert-danger');//clase de la alerta
  
  items[index].parentNode.removeChild(items[index]);
  divAlert.appendChild(label);
  showDiv.appendChild(divAlert);

  //console.log("Se elimino el elemento: "+ index);
  setTimeout(function() {
    divAlert.style.display = 'none';
  }, 1000);
  
});


//obtener index of element in list
var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li");  
list.onclick = function(e) {
      var event = e || window.event,
      src = event.target || event.srcElement;
      var myIndex = findIndex(src);
     // alert(myIndex);
      index=myIndex;
      console.log(myIndex);
      
      //cambiar color del elemento seleccionado
      if (event.target.tagName === 'LI' ) {
        list.querySelectorAll('li').forEach(el=>el.classList.remove('alert','alert-success'));
        items[index].classList.add('alert','alert-success');
      }    
};
function findIndex(elem) {
    var i, len = items.length;
    for(i=0; i<len; i++) {
        if (items[i]===elem) {
            return i;
        }
    }
    return -1;
}
