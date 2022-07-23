document.getElementById("btn1").onclick = all;
document.getElementById("btn2").onclick = web;
document.getElementById("btn3").onclick = app;


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



import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

const db = getDatabase();


var btn = document.getElementById("send");
btn.onclick = insertData;

var name = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var textarea = document.getElementById("textarea");
var phone = document.getElementById("phone");

var namebox, emailbox, subjectbox, textareabox, phonebox;

function insertData(e) {
    e.preventDefault();
    // console.log("Clicked");
    readFormData();

    if (namebox != "" && emailbox != "", subjectbox != "", textareabox != "", phonebox != "") {
        // name.style.border="2px solid red"    
        set(ref(db, "ViewerData/" + phonebox), {
            PhoneNo: phonebox,
            Name: namebox,
            Email: emailbox,
            Subject: subjectbox,
            TextArea: textareabox
        }).then(() => {
            alert("Data Stored Successfully")
        }).catch((error) => {
            alert("Unsuccessful", error)
        });

    }
    else {
        
        
        alert("Input Fields Cannot be Blank")
        

    }

    clearData();
}

function readFormData() {

    namebox = name.value;
    emailbox = email.value;
    subjectbox = subject.value;
    textareabox = textarea.value;
    phonebox = phone.value;

    console.log(namebox, emailbox, subjectbox, textareabox)
}

function clearData() {
    name.value = "";
    email.value = "";
    subject.value = "";
    textarea.value = "";
    phone.value = "";
}