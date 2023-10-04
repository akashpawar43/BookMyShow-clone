document.addEventListener("DOMContentLoaded", () => {
    const signUpform = document.querySelector("#signup-form");
    const emailform = document.querySelector("#email_signup");
    const hamBurger = document.querySelector("#ham_burg")

    document.querySelector("#signin").addEventListener("click", e => {
        e.preventDefault();
        signUpform.classList.remove("form_hidden");
        emailform.classList.add("form_hidden");
    });

    document.querySelector("#ham_acc_log_btn").addEventListener("click", e => {
        e.preventDefault();
        signUpform.classList.remove("form_hidden");
        emailform.classList.add("form_hidden");
        hamBurger.classList.add("form_hidden");
    });
    
    document.querySelector("#cancel").addEventListener("click", e => {
        e.preventDefault();
        signUpform.classList.add("form_hidden");
        emailform.classList.add("form_hidden");
    });

    document.querySelector("#link_email").addEventListener("click", e => {
        e.preventDefault();
        signUpform.classList.add("form_hidden");
        emailform.classList.remove("form_hidden");
    });
    
    document.querySelector("#backto_signup").addEventListener("click", e => {
        e.preventDefault();
        signUpform.classList.remove("form_hidden");
        emailform.classList.add("form_hidden");
    });
    
    document.querySelector("#ham").addEventListener("click", e => {
        e.preventDefault();
        hamBurger.classList.remove("form_hidden");
    });
    
});
// let signForm = document.querySelector('.signup-form');

// document.querySelector('#signin').onclick = () => {
//     signForm.classList.toggle('active');
// }



// let emailForm = document.querySelector('.email_signup');

// document.querySelector('#link_email').onclick = () => {
//     emailForm.classList.toggle('active');
// }



function myFunction(x) {
    x.classList.toggle("change");
}


$(document).ready(function () {
    $('#Carousel').carousel({
        interval: 5000
    })
});

