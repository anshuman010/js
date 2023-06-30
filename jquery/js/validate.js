
    // alert("hi")
      
        ///////////////////////////
        var form = document.getElementById("formId");
      var opTag = document.getElementById("opTag");
      function submitForm(event) {
         event.preventDefault();
         let user={}
         user["firstName"]=document.getElementById("fname").value
         user["lastName"]=document.getElementById('lname').value
         user["password"]=document.getElementById("password").value
         user["email"]=document.getElementById("email").value
     
         // const user = {
         //     firstName: name,+
         //     lastName:lastName,
         //     password:password,
         //     email: email
         //   };
           console.log(user);
          
           
           fetch('http://localhost:8080/register', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(user)
           })
             .then(response => response.json())
             .then(createdUser => {
               // Process the created user
               console.log(createdUser);
             })
             .catch(error => {
               // Handle any errors
               console.error(error);
             });
             window.location.replace("register.html");
      }
      form.addEventListener('submit', submitForm);
     
       
