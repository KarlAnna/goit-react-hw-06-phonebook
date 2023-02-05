import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice'

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch()
    const { name, number, id } = contact
    
    return (
        <>
          <p>{name}: {number}</p>
          <button type="button" onClick={()=> dispatch(removeContact(id))}>Delete</button>
        </>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
    onDelete: PropTypes.func
}

export default ContactItem