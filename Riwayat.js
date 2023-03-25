const dataArr = JSON.parse(sessionStorage.getItem("data")) || [];

const tableBody = document.getElementById("table-body");
dataArr.forEach(data => {
    const tr = document.createElement("tr");
    const tdusername = document.createElement("td");
    tdusername.appendChild(document.createTextNode(data.username));
    const tdEmail = document.createElement("td");
    tdEmail.appendChild(document.createTextNode(data.email));
    const tdphone = document.createElement("td");
    tdphone.appendChild(document.createTextNode(data.phone));
    const tdgender = document.createElement("td");
    tdgender.appendChild(document.createTextNode(data.gender));
    const tdcommunity = document.createElement("td");
    tdcommunity.appendChild(document.createTextNode(data.community));
    

    tr.appendChild(tdusername);
    tr.appendChild(tdEmail);
    tr.appendChild(tdphone);
    tr.appendChild(tdgender);
    tr.appendChild(tdcommunity);
    

    tableBody.appendChild(tr);
});

function back() {
    window.location.href = "Form.html";
}