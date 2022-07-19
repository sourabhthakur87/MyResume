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

        td1.innerText = ++stdNo;
        td2.innerText=user.Name;
        td3.innerText=user.Email;
        td4.innerText=user.Subject;
        td5.innerText=user.TextArea;


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbody.append(tr);
    })
}


window.onload=getUserData;