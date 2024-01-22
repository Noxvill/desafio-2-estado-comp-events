import 'bootstrap/dist/css/bootstrap.min.css'
import './Formulario.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Registro from '../Registro/Registro';
import Alert from '../Alert/Alert';
import { useState } from 'react';

const Formulario = () =>{
  //Estados del formulario
const [nombre, setNombre] = useState('');
const [mail, setMail] = useState('');
const [pass, setPass] = useState('');
const [pass2, setPass2] = useState('');
const [error, setError] = useState(false);  
const [error2, setError2] = useState(false);
const [error3, setError3] = useState(false);
const [success, setSuccess] = useState(false);


//Función para validar que los campos no vayan vaciós

const validarDatos = () => {

  if (nombre === '' || mail === '' || pass === '' || pass2 === '')
  {
  setError3(true);
  return true;
  }
  setError3(false);
  return false
  };



// validador Pass iguales
const validaPass =()=>{

  if (pass !== pass2){
  
    setError(true);
    return true
 }else{

  setError(false)
  return false
 }}



 //Validar mail
 
 const validarFormatoEmail = (email) => {
  // Expresión regular para validar el formato de un correo electrónico
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
  // Comprueba si el correo electrónico cumple con el formato
  return regex.test(email);
}

//invocar a validar mail

const  llamaValidmail=()=>{

const esValido = validarFormatoEmail(mail);

if (esValido===false) {
  setError2(true);
  console.log("formato malo")
  return true
} else {
  setError2(false);
  console.log("formato ok")
  return false
}
}



 //Función para invocar a validar datos y otra

 const validaciones=(e)=>{
e.preventDefault();
validarDatos();
validaPass();
llamaValidmail();


if(validarDatos() === false && validaPass() === false && llamaValidmail() === false){
  
  setSuccess(true)
  
  }
}



 return(

<>
<Form style={{ padding: '30px', height:'33rem' ,width: '20rem', border: '2px solid white', borderRadius: '40px',backgroundColor: 'white'}} 

onSubmit={validaciones}
>

<h2>Crea una cuenta</h2>
<Registro/>
<p className='parrafo'>O usa tu email para registrarte</p>
<Form.Group className="mb-3" controlId="nombre" >
<Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
value={nombre}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="mail" placeholder="tuemail@ejemplo.cl" onChange={(e) => setMail(e.target.value)}
value={mail}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPass(e.target.value)}
value={pass}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="password" placeholder="Confirma tu contraseña" onChange={(e) => setPass2(e.target.value)}
value={pass2}/>
      </Form.Group>

      <Button style={{ width: '16rem', background: 'green', textAlign: 'center' }} type="submit">
        Registrarse
      </Button>
      <Alert 
      
      error={error}
      error2={error2}
      error3={error3}
      success={success}
     
   
      />

 </Form>
</>

    )

} 
export default Formulario