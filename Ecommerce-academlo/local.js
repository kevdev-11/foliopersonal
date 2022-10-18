let productInStock = [{
    
    id: 1, 
    nombre: "G-phoenix last edition", 
    tipo: "console", 
    cantidad: 1,
    precio: 899, 
    img: './pc-gamer-1.png'
    },
    {
    id: 2, 
    nombre: "Chair gamer r45k", 
    tipo: "chair", 
    cantidad: 1, 
    precio: 120,
    img: './chairgamer.png'
    },
    {
    id: 3,
    nombre: "Headphones gamer Kotion",
    tipo: "headphones", 
    cantidad: 1,
    precio: 10,
    img: './audifonos-slider.png'},
    
    {id: 4, 
    nombre: "NateCPU g-force Nvidia 10T", 
    tipo: "console", 
    cantidad: 1,
    precio: 799, 
    img: './computerpc2.jpg'},

    {id: 5, 
    nombre: "Headphones stageon black", 
    tipo: "headphones", 
    cantidad: 1, 
    precio: 12,
    img: './audifonos-gamer-black.png'
    },
    {
    id: 6, 
    nombre: "G-notebook ASUSG-force",
    tipo: "console", 
    cantidad: 1, 
    precio: 2499, 
    img: './laptop-gamer1.png'}
];

guardLocal();

function guardLocal() {

   
    
    localStorage.setItem("listNode", JSON.stringify(productInStock));    

}


 
    // let persona = JSON.parse(localStorage.getItem("list"));





