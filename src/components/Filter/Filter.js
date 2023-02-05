import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = ({ filter }) => {

    const dispatch = useDispatch()

    const changeFilter = (e) => {
        const { value } = e.target;
        dispatch(updateFilter(value))
    }

    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filter} onChange={changeFilter} />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func
}

export default Filter