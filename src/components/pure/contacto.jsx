import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({ contacto, complete, remove }) => {



    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contacto.nombre} is going to unmount`);
        }
    }, [contacto]);


    function contactDisponibilidadBadge(){
        switch (contacto.disponibilidad) {
            case true:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                    Conectado
                    </span>
                </h6>)
            case false:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                       Desonectado
                    </span>
                </h6>)
            default:
                break;
        }
    }

     function contactDisponibilidadIcon(){
        if(contacto.disponibilidad){
            return (<i onClick={() => complete(contacto)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(contacto)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

  return (
    <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contacto.nombre}</span>
            </th>
            <td className='align-middle'>
                <span>{contacto.apellido}</span>
            </td>
            <td className='align-middle'>
                <span>{contacto.email}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {contactDisponibilidadBadge()}
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {contactDisponibilidadIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(contacto)}></i>
            </td>
           
        </tr>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactoComponent;