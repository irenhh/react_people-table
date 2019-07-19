import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

function PeopleTable(props) {
  const { people, sortBy, markRow } = props;

  const columnNames = [
    'id',
    'name',
    'sex',
    'born',
    'died',
    'father',
    'mother',
    'age',
    'century',
    'children',
  ];

  return (
    <table className="people-table">
      <thead>
        <tr>
          {columnNames.map(item => (
            <th key={item} onClick={() => sortBy(item)}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <Person
            key={person.id}
            person={person}
            markRow={markRow}
            columnNames={columnNames}
          />
        ))}
      </tbody>
    </table>
  );
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.func.isRequired,
  markRow: PropTypes.func.isRequired,
};

export default PeopleTable;
