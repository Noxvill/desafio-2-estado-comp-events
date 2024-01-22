import './Alert.css'
const Alert =(props)=>{

    
return(
<>
{props.error ? <p className='errorAlert'>Las contraseñas no son iguales</p> : null} 
{props.error2 ? <p className='errorAlert'>Mail incorrecto</p> : null}
{props.error3 ? <p className='errorAlert'>Se deben completar todos los datos</p> : null}
{props.success ? <p className='success'>Registro Exitoso</p> : null}
</>
)}

export default Alert