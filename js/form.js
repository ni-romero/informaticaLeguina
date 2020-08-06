 var formulario = document.getElementById("formulario");

 formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 
     var datos = new FormData(formulario)


Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
 
);
 })
 