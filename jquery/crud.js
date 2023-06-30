
function getData() {
    fetch("http://localhost:8080/getall").then(
        (res) => res.json()
    ).then((response) => {
        var tmpData = "";
        // console.log(response);
        response.forEach((user) => {
            tmpData += "<tr>"
            tmpData += "<td>" + user.id + "</td>";
            tmpData += "<td>" + user.firstName + "</td>";
            tmpData += "<td>" + user.lastName + "</td>";
            tmpData += "<td>" + user.email + "</td>";
            tmpData += "<td><button class='btn btn-primary' onclick='editDataCall(`" + user.id + "`)'>Edit</button></td>";
            tmpData += "<td><button class='btn btn-danger' onclick='deleteData(`" + user.id + "`)'>Delete</button></td>";

            tmpData += "</tr>";
        })
        console.log("====>",document.getElementById("tbData"))
        document.getElementById("tbData").innerHTML = tmpData;
        console.log(document.getElementById("tbData").innerHTML);
    })
}

getData();

function deleteData(id) {

    fetch(`http://localhost:8080/delete/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {

                console.log('Data deleted');

            } else {

                console.error('Data deletion failed');
            }
        })
        .catch(error => {
            console.error(error);
        });
}




function editDataCall(id) {
    //window.location.replace("updateform.html");
    //console.log("id ====>",id)
    sessionStorage.setItem("id", id);
    let lastname = sessionStorage.getItem("id");
    
    
   
    window.location.href = "updateform.html";
    // const updateForm = document.getElementById('update-form');
    // updateForm.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const firstname = document.getElementById('ufname').value;
    //     const lastname = document.getElementById('ulname').value;
    //     const email = document.getElementById('uemail').value;
    //     const password = document.getElementById('upassword').value;
    //     updateData(id, firstname, lastname, email, password);
    //     updateForm.reset();
    // });



}
