export function splash(){

    let div = document.createElement ('div');
    div.className = "div-splash";

    let span1 = document.createElement ('span');
    span1.textContent = "Geeta.";
    div.appendChild(span);

    let span2 = document.createElement ('span');
    span2.textContent = "Create your fashion in your own way";
    div.appendChild(span2);

    let span3 = document.createElement ('span');
    span3.textContent = "Each men and women has their own style, Geeta help you to create your unique style. ";
    div.appendChild(span3);

    let lgBoton = document.createElement ('a');
    lgBoton.href = "pages/login.html";
    lgBoton.className = "lg-boton";
    lgBoton.textContent = "Log in";
    div.appendChild(lgBoton);

    return div;

}