const form = document.getElementById("form");
const mensagemerro = document.querySelector(".msgErro");
const mensagemsucesso = document.querySelector(".msgScss");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let campoa = document.getElementById("campoa");
    let campob = document.getElementById("campob");
    const msgErro = "O campo <b> B </b> deve ser maior que <b>A</b>";
    const msgSucess = "Parabens, O numero do campo B é maior que do campo A ";
    if (campoa.value < campob.value){
        mensagemsucesso.innerHTML = msgSucess;
        mensagemsucesso.style.display = "block";
        document.querySelector(".msgErro").style.display = "none";
        campoa.value = " ";
        campob.value = " ";
        
    } else {
        mensagemerro.innerHTML = msgErro;
        mensagemerro.style.display = "block";
        document.querySelector(".msgScss").style.display = "none";
        campoa.value = " ";
        campob.value = " ";
}})




