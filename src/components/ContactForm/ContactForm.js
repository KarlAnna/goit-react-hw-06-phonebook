import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import '../Phonebook.css'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    const formSubmitHandler = (e) => {
        e.preventDefault()

        dispatch(addContact(name, number));

        setName('')
        setNumber('')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break
            default:
                break;
        }
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor="number">Number</label>
            <input
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type="submit">Add contact</button>
        </form>
    );
        
}

ContactForm.propTypes = {
        onSubmit: PropTypes.func,
    }