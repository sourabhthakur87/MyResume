import { getDatabase, ref, get, child, set, update, remove } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";


const db = getDatabase();



function getUserData() {
    const dbref = ref(db);

    get(child(dbref, "ViewerData/")).then((snapshot) => {
        var Viewer = [];
        snapshot.forEach((childsnapshot) => {
            Viewer.push(childsnapshot.val());
        });
        console.log(Viewer);
        DisplayViewer(Viewer);
    });
}



var stdNo = 0;
var tbody = document.getElementById("tbody");


function DisplayViewer(Viewerdata) {
    stdNo = 0;
    tbody.innerHTML = "";

    Viewerdata.forEach((user) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        // let td6 = document.createElement("td");


        // var deletebtn = document.createElement("button");

        // deletebtn.onclick = delfun;

        // deletebtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

        td1.innerText = ++stdNo;
        td3.innerText = user.Name;
        td4.innerText = user.Email;
        td5.innerText = user.Subject;
        td6.innerText = user.TextArea;
        td2.innerText = user.PhoneNo;
        // td6.appendChild(deletebtn);


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        // tr.appendChild(td6);

        tbody.append(tr);


    })
}
window.onload = getUserData;

document.querySelectorAll('.btn')[0].onclick = readData;
document.querySelectorAll('.btn')[1].onclick = updateData;
document.querySelectorAll('.btn')[2].onclick = deleteData;

var name = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var textarea = document.getElementById("textarea");
var phone = document.getElementById("phone");

var namebox, emailbox, subjectbox, textareabox,phonebox;



function readFormData() {

    namebox = name.value;
    emailbox = email.value;
    subjectbox = subject.value;
    textareabox = textarea.value;
    phonebox = phone.value;

    console.log(namebox, emailbox, subjectbox, textareabox,phonebox)
}





function readData(event) {
    event.preventDefault();
    readFormData();
    console.log("read click")
    // Code to Read the data from Firebase

    const dbref = ref(db);

    get(child(dbref, "ViewerData/" + phonebox)).then((snapshot) => {
        if (snapshot.exists()) {
            phone.value=snapshot.val().PhoneNo;
            name.value = snapshot.val().Name;
            email.value = snapshot.val().Email;
            subject.value = snapshot.val().Subject;
            textarea.value = snapshot.val().TextArea;
        }
        else {
            alert("No Data Found")
        }
    }).catch((error) => { alert("UnsuccessFul", error); });

    // clearData()
}

function updateData(event) {
    // event.preventDefault();
    readFormData();
    console.log("update click")
    // Code to Update the data from Firebase

    update(ref(db, "ViewerData/" + phonebox), {
        PhoneNo:phonebox,
        Name: namebox,
        Email: emailbox,
        Subject: subjectbox,
        TextArea: textareabox
    }).then(() => {
        alert("Data Updated Successfully");
    }).catch((error) => { alert("UnsuccessFul", error); });


    clearData()
}
function deleteData(event) {
    // event.preventDefault();
    readFormData();
    console.log("delete click")
    // Code to Delete the data from Firebase 

    if (name == "" && email == "" && subject == "" && textarea == "") {
        alert("Fields Cannot be blank")
    }
    else {
        if (confirm("Are Your Sure To Delete:-")) {
            remove(ref(db, "ViewerData/" + phonebox)).then(() => {
                alert("Data Removed Successfully");
            }).catch((error) => { alert("UnsuccessFul", error); });
        }

        clearData()
    }

}

function clearData() {
    name.value = "";
    email.value = "";
    subject.value = "";
    textarea.value = "";
    phone.value = "";
}