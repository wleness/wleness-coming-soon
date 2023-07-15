const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {

let alert = document.getElementById('form_result')
let contactForm = document.getElementById('contactpage')

document.addEventListener('load', ()=>{
    contactForm.addEventListener("submit", (event) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        // Get form values
        let email = document.getElementById('email')
        console.log(email.value)
    
        // Validate form values
        if (email.value == "") {
            showMsg(false, "Please enter your email")
        } else {
          fetch("https://getform.io/f/f408f6b7-fb9f-4364-9214-508a9634a0d9", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
          })
          .then(response => console.log(response))
          .catch(error => console.log(error))


        }
      });
})
}

// $.ajax({
//   url: "",
//   type: "POST",
//   data: contactForm.serialize(),
//   success: function () {
//       showMsg(true, "Successfully! Submitted Form")
//   },
// });

function showMsg(bool, msg) {
  if (bool) {
    alert.innerText(msg);
  } else {
    alert.innerText(msg);
  }
}