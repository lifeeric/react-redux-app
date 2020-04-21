import * as actionTypes from './actions';

const initialState = {
    persons: []
}


// Reducer
export default (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: new Date(),
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.id)
            }
        default:
            return state;
    }

    return state;
}