const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});


const tienda = document.querySelector(".container");
fetch("https://tiendavirtualmern.herokuapp.com/api")
.then (response => console.log(response));

function nuevoUsuario(name, email, password) {
  name = name,
  email = email,
  password = password
}  

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

const usuario = new nuevoUsuario(nameNuevo, emailNuevo, passwordNuevo);

const useAsync = async () => {
  
  try {
    const response = await fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    
    if (response.status !== 404) {
      throw new error('error en api');
    }
    
    const data = await response.json();
    console.log(data);
    // .then(response => response.json()) 
    // .then(json => console.log(json));

  } catch (error) {
    const nuevoError =  error;
    nuevoError.textContent = error;
  }
  
};

function main() {
  useAsync();
}

main();
