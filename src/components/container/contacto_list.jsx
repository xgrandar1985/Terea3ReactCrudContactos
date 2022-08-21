import React, { useState, useEffect } from 'react';
import { Contacto } from '../../models/contacto.class'
import ContactoComponent from '../pure/contacto';
import Contactoform from '../pure/forms/contactoForm';

const ContactoListComponent = props => {

  const defaultContacto = new Contacto('Xavier', 'Granda', 'xavi@gmail.com', false,);
  const defaultContacto2 = new Contacto('Carlos', 'Riera', 'criera@gmail.com', true,);
  const defaultContacto3 = new Contacto('Nany', 'Torrez', 'ntorrez@gmail.com', false,);


  // Estado del componente
  const [contacts, setContacts] = useState([defaultContacto, defaultContacto2, defaultContacto3]);


  // Control del ciclo de vida del componente
  useEffect(() => {
      console.log('Contact State has been modified');
      return () => {
          console.log('ContactList component is going to unmount...')
      }
  }, [contacts])


  function completeContact(contact){
    console.log('Complete this Contact:', contact);
    const index = contacts.indexOf(contact);
    const temContacts = [...contacts];
    temContacts[index].disponibilidad = !temContacts[index].disponibilidad;

    setContacts(temContacts);
}

function deleteContact(contact){
    console.log('Detele this Contact:', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index,1);
    setContacts(tempContacts);
}

function addContact(contact){
    console.log('Add this Contact:', contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
}


  return (
    <div>
        <div className='col-12'>
            <div className='card'>

                <div className='card-header p-3'>
                    <h5>
                        Your Contacts:
                    </h5>
                </div>
                
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Apellido</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Disponibilidad</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map((contact, index) => {
                                return (
                                        <ContactoComponent 
                                            key={index} 
                                            contacto={contact}
                                            complete={completeContact}
                                            remove = {deleteContact}
                                        >
                                        </ContactoComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Contactoform add={addContact}></Contactoform>
    </div>
);
}


export default ContactoListComponent;