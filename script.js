var All = document.getElementById("btn1").onclick = all;
var web = document.getElementById("btn2").onclick = web;
var app = document.getElementById("btn3").onclick = app;






function web() {
    console.log("clicked WEB");
    document.getElementById("app1").style.display = "none";
    document.getElementById("app2").style.display = "none";
    document.getElementById("app3").style.display = "none";
    document.getElementById("app4").style.display = "none";

    document.getElementById("web1").style.display = "block";
    document.getElementById("web2").style.display = "block";
    document.getElementById("web3").style.display = "block";
    document.getElementById("web4").style.display = "block";

}
function app() {
    console.log("clicked APP");

    document.getElementById("web1").style.display = "none";
    document.getElementById("web2").style.display = "none";
    document.getElementById("web3").style.display = "none";
    document.getElementById("web4").style.display = "none";


    document.getElementById("app1").style.display = "block";
    document.getElementById("app2").style.display = "block";
    document.getElementById("app3").style.display = "block";
    document.getElementById("app4").style.display = "block";
}



function all() {
    console.log("clicked ALL");
    window.location.reload();




}
