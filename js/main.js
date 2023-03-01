let shoppinglist = [
    'pane',
    'latte',
    'uova',
    'pesce',
    'patate'
]

let  i = 0;
const shoppinglistitem = document.querySelector('.lista-della-spesa');
let listitemdom = "";

while(i < shoppinglist.length){
    const shoppinglistitem = `<li>${shoppinglist[i]}</li>`;
    i++
    listitemdom += shoppinglistitem
}

shoppinglistitem.innerHTML = listitemdom; 