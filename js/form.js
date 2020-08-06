 var formulario = document.getElementById("formulario");

 formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 
     var datos = new FormData(formulario);
    console.log(datos.get("email"))

Email.send({
    Host : "smtp.wiroos.com",
    Username : "info@leguinainformatica.com.ar",
    Password : "pass",
    To : 'info@leguinainformatica.com.ar',
    From : datos.get("email"),
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
 
);
 })
