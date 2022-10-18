///const stickLiner = document.querySelector(".first_line")
const stockInCards = document.getElementById("grid_template_card");
const modalCarrito = document.getElementById("modal-car");
const carritoButton = document.getElementById("main-menu");



let carrito=[];


productInStock.forEach((producto) => {
    

    let div = document.createElement('div');
    div.classList.add('card_product');
    div.innerHTML = `
    <p class="heading-card">${producto.nombre}</p>
    <img class="img_cards" src=${producto.img} alt="">
    <p class="prices">$${producto.precio}</p>
    <div class="stock_cards">
    <p class="cantidades" >cantidad:</p><input type="text" min="0" max="8" value="${producto.cantidad}">
    </div>`;

    stockInCards.append(div);
    
    let buy = document.createElement("button");
    buy.innerText = "Add";
    buy.className = "stock-btn"

    div.append(buy);

    buy.addEventListener("click", ()=>{
        const repeat = carrito.some((repeatProducto)=> repeatProducto.id === producto.id);
        if(repeat){
            carrito.map((prod)=>{
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
        });
     }else {
            carrito.push({
                img: producto.img,
                nombre: producto.nombre,
                tipo: producto.tipo,
                cantidad: producto.cantidad,
                precio: producto.precio,
                id: producto.id,
                });
        }
    });

});


const pintarCarrito =() =>{
carritoButton.addEventListener("click", ()=>{
    modalCarrito.innerHTML="";
    modalCarrito.style.display ="flex";

    const modalHead = document.createElement("div");
    modalHead.className = "main-menu"
    modalHead.innerHTML = `
     <h1 class="modal-header">carrito de compras</h1>`;
    
     modalCarrito.append(modalHead);

    const modalRemove = document.createElement("h1");
    modalRemove.innerText ="X";
    modalRemove.className ="modal-header-button";

   modalRemove.addEventListener("click", ()=>{
        modalCarrito.style.display="none";
   });

    modalHead.append(modalRemove);

   

    carrito.forEach((producto) => {
        let contentModal = document.createElement("div");
        contentModal.className = "container-items";
        contentModal.innerHTML=`
            <img class="img-modal" src="${producto.img}" alt="">
            <h3>${producto.nombre}</h3>
            <h3 class="heading-p">${producto.tipo}</h3>
            <p>$${producto.precio}</p>
            <p>cantidad: ${producto.cantidad}</p>
            <p>Total: ${producto.cantidad * producto.precio}</p>
            `;

        modalCarrito.append(contentModal);
        
        let eliminar = document.createElement("h3");
        eliminar.innerText="x";
        eliminar.className = "delete-p";
        contentModal.append(eliminar);

        eliminar.addEventListener("click", eliminarContent);

    });

    const valorTotal = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0 );
    const deployFoot = document.createElement("div");
    deployFoot.className= "total-footer";
    deployFoot.innerHTML = `Total: $${valorTotal}`;

    modalCarrito.append(deployFoot);
     
});
}

carritoButton.addEventListener("click", pintarCarrito);

let eliminarContent = () => {
    const foundId = carrito.find((producto)=> producto.id);

    carrito=carrito.filter((carritoId)=> {
        return carritoId !== foundId;
    });

    pintarCarrito();
};
    
    const pulse = document.querySelector("input");

    pulse.addEventListener("click", () =>{
       const createReduce = onclick("button");
       createReduce.reduce((acc, s)=> acc - s.cantidad, 0);
    });


