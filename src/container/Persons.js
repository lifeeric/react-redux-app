import React from 'react'
import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

function Persons(props) {
    return (
        <div>
            <h1>Person Adding, Redux</h1>
            <AddPerson addPerson={(name, age) => props.addNewPerson(name, age)} />
            {props.prs.length > 0 ? props.prs.map(person => (
                <Person 
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    deletePerson={() => props.deleteTheUser(person.id)}
                />
            )): null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        prs: state.persons
    }
}

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        addNewPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name, age}}),
        deleteTheUser: (id) => dispatch({type: actionTypes.REMOVE_PERSON, id: id})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);
