import 'bootstrap/dist/css/bootstrap.min.css'
import './Formulario.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Registro from '../Registro/Registro';
import { useState } from 'react';



const Formulario = () =>{
  //Estados del formulario
const [nombre, setNombre] = useState('');
const [mail, setMail] = useState('');
const [pass, setPass] = useState('');
const [pass2, setPass2] = useState('');

const validaMailPass = () =>{
  e.preventDefault();
if (mail = ''){

alert ("mail malo")

}

else{

alert("Mail bueno")  
}
}


//Estado para los errores
const [error, setError] = useState(false);

//Función antes de enviar el formulario
const validarDatos = (e) => {
  e.preventDefault();
  //Validación;
  if (nombre === '' || mail === '' || pass === '' || pass2 === '')
  {
  setError(true);
  return;
  }
  setError(false);
  };


  return(

<>
<Form style={{ padding: '30px', height:'30rem' ,width: '20rem', border: '2px solid white', borderRadius: '40px',backgroundColor: 'white'}} onSubmit={validarDatos}>

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

      <Button style={{ width: '16rem', background: 'green', textAlign: 'center' }} type="submit" onSubmit={validaMailPass}>
        Registrarse
      </Button>
      {error ? <p>Todos los campos son obligatorios</p> : null}   
    </Form>
</>

    )

} 
export default Formulario