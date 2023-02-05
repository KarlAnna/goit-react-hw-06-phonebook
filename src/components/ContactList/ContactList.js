import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/contactsSlice';
import ContactItem from "../ContactItem/ContactItem"

const ContactList = () => {
    const { contacts } = useSelector(getContacts)
    const filter = useSelector(getFilterValue)

    const getVisibleContacts = () => {
        const normFilter = filter.toLowerCase().trim()
        if (filter.length > 0) {
            return contacts.filter(contact => contact.name.toLowerCase().includes(normFilter))
        }
        return contacts
    }
    
    return (
        <>
            {contacts.length > 0 && (
                <ul>
                    {getVisibleContacts().map((contact) =>
                        <li key={contact.id}>
                            <ContactItem contact={contact} />
                        </li>
                    )}
                </ul>
            )}
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDelete: PropTypes.func
}

export default ContactList