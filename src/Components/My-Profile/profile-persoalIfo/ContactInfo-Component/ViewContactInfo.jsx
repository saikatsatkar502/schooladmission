import React from 'react'
import ContactCard from './ContactCard';

export default function ViewContactInfo(props) {
    const deleteContactHandler = (id) => {
        props.deleteHandler(id);
    };
    const renderContacts = props.Contacts.map((Contact) => {
        return (
            <ContactCard Contact={Contact} cickHandler={deleteContactHandler} key={Contact.id} />
        );
    });
    return (
        <div id='CourseCard' >
            {
                renderContacts
            }

        </div>
    )
}
