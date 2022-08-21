import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';

const Contactoform = ({add}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef("");
    const emailRef = useRef("");
    const disponibilidadRef = useRef(false);
    
    

    function addContact(e){
        e.preventDefault();
        console.log(disponibilidadRef.current.value);
        let xxx;
       if(disponibilidadRef.current.value === "false"){
            xxx=false;
       }else{
            xxx=true;
       }
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value, 
            xxx,

        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Nombre'/>
                <input ref={apellidoRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Apellido'/>
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Contact email'/>
                <label htmlFor='selectLevel' className='sr-only'>Disponibilidad</label>
                <select ref={disponibilidadRef} defaultValue={false} id='selectLevel'>
                    <option value={false}>
                        Desconectado
                    </option>
                    <option value={true}>
                        Conectado
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}

Contactoform.protoTypes = {
    add: PropTypes.func.isRequired
}

export default Contactoform;
