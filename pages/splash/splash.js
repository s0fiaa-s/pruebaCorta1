import { banner } from "../../components/banner/banner.js";
export function splash(){

    let div = document.createElement('div');
    div.className = "splash";

    let span = document.createElement('span');
    span.className = "span";
    span.textContent = "Geeta."
    div.appendChild(span);

    let span2 = document.createElement('span');
    span2.className = "span2"
    span2.textContent = "Create your fashion in your own way"
    div.appendChild(span2);

    let span3 = document.createElement('span');
    span3.className = "span3"
    span3.textContent = "Each men and women has their own style, Geeta help you to create your unique style."
    div.appendChild(span3);

    let boton1 = document.createElement('a');
    boton1.href = "../login/login.html";
    boton1.className = "boton1"
    boton1.textContent = "LOG IN"
    div.appendChild(boton1);

    boton1.addEventListener('click', ()=>{
        div.classList.add = ("ocultar");
        document.body.appendChild(banner());
    });

    let span4 = document.createElement('span');
    span4.className = "span4"
    span4.textContent = "-- OR --"
    div.appendChild(span4);

    let boton2 = document.createElement('a');
    boton2.href = "../register.html";
    boton2.className = "boton2"
    boton2.textContent = "REGISTER"
    div.appendChild(boton2);

    return div;
}

document.body.appendChild(splash());