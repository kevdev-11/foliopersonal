let box = document.getElementById("element");
let code = document.getElementById("code");
let inputsRange = document.querySelectorAll(".sliders input");



inputsRange.forEach(inp => inp.addEventListener("input", generateShadow));

function generateShadow() {
    let hShadow = document.getElementById("h-shadow").value;
    let vShadow = document.getElementById("v-shadow").value;
    let blurRadius = document.getElementById("blur-radius").value;
    let spreadRadius = document.getElementById("spread-radius").value;
    let shadowColor = document.getElementById("shadow-color").value;
    let opacityBack = document.getElementById("opacity").value;
    let insetForm = document.getElementById("inset").checked;


// Usamos operador ternario para comprobar si se marca o no la checkbox del inset
// en caso de que lo esté se inserta en el elemento mencionado (box)
// caso contrario no se inserta
    let boxShadow = insetForm ? `inset ${hShadow}px ${vShadow}px 
    ${blurRadius}px ${spreadRadius}px 
    ${hexRgba(shadowColor, opacityBack)}`
    
    : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexRgba(shadowColor, opacityBack)}`

box.style.boxShadow = boxShadow;

code.textContent = `BoxShadow:${boxShadow};`;
}

// Convirtiendo los valores de hexadecimal a RGBA usando la función a continuación:

function hexRgba(shadowColor, opacityBack) {
    let r= parseInt(shadowColor.substr (1, 2), 16);
    let g = parseInt(shadowColor.substr (3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r},${g},${b},${opacityBack})`;

}


// Me devolverá los valores una vez convierta con parseInt los valores
// enteros en una cadena de carácteres de tipo numérica

inputsRange.forEach(inp=> inp.addEventListener("input", generateBox));



function generateBox() {
    let widthArea = document.getElementById("h-growth");
    let heightArea = document.getElementById("v-growth");
    let borderArea = document.getElementById("border-r");
    let colorBox = document.getElementById("color-box");    


    widthArea.oninput=() =>{
        box.style.width = widthArea.value +'px';
    }

    heightArea.oninput=() => {
        box.style.height = heightArea.value +'px';
    }

    borderArea.oninput=() => {
        box.style.borderRadius = borderArea.value +'px';
    }

    box.style.backgroundColor = colorBox.value;

}



function copyCode() {
    code.select();
    document.execCommand("copy");
    alert("Copied code!");
}

window.onload = generateShadow();
