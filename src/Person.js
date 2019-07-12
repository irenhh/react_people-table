import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

function Person(props) {
  const { person, markRow } = props;

  const tableRowClass = classNames({
    person,
    'person--female': person.sex === 'f',
    'person--male': person.sex === 'm',
    'person--mother': person.sex === 'f' && person.children.length > 0,
    'person--father': person.sex === 'm' && person.children.length > 0,
    [`person--lived-in-${person.century}`]: true,
    'marked-row': person.marked,
  });

  const personNameCellStyles = {
    textDecoration: person.born < 1650 && 'line-through',
    fontWeight: person.died > 1800 && 'bold',
  };

  return (
    <tr
      className={tableRowClass}
      style={{ background: person.sex === 'f' && 'lightpink' }}
      onClick={() => markRow(person.id)}
    >
      <td>{person.id}</td>

      <td style={personNameCellStyles}>
        {person.name}
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.father}</td>
      <td>{person.mother}</td>
      <td>{person.age}</td>
      <td>{person.century}</td>
      <td>{person.children.join(', ')}</td>
    </tr>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    born: PropTypes.number,
    died: PropTypes.number,
    father: PropTypes.string,
    mother: PropTypes.string,
    age: PropTypes.number,
    century: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.string),
    marked: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,

  markRow: PropTypes.func.isRequired,
};

export default Person;
