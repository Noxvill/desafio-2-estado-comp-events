import 'bootstrap/dist/css/bootstrap.min.css'
import './Formulario.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Registro from '../Registro/Registro';
import Alert from '../Alert/Alert';
import { useState } from 'react';

const exitoso =()=>{


  
}


const Formulario = () =>{
  //Estados del formulario
const [nombre, setNombre] = useState('');
const [mail, setMail] = useState('');
const [pass, setPass] = useState('');
const [pass2, setPass2] = useState('');
const [error, setError] = useState();  
const [error2, setError2] = useState(false);
const [error3, setError3] = useState(false);
const [success, setSuccess] = useState(false);


//Función para validar que los campos no vayan vaciós

const validarDatos = () => {

  if (nombre === '' || mail === '' || pass === '' || pass2 === '')
  {
  setError3(true);
  return;
  }
  setError3(false);
  };



// validador Pass iguales
const validaPass =()=>{

  if (pass !== pass2){
  
    setError(true);
 }else{

  setError(false)
 }}



 //Validar mail
//  const validarEmail = (email) => {
//   const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return expresionRegular.test(email);
// }

// //Valida cambio mail
// const handleChange = (e) => {

//   const email = e.target.value;
//   setMail(email);
//   setEsValido(validarEmail(email));
// }

 //Función para invocar a validar datos y otra

 const validaciones=(e)=>{
  e.preventDefault();
  validaPass();
  validarDatos();
  

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