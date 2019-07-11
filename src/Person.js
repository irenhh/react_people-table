import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const { person, markRow } = props;

  return (
    <tr
      className={`
        person 
        ${person.sex === 'f' ? 'person--female' : 'person--male'}
        ${person.sex === 'f' && person.children.length > 0
          ? 'person--mother'
          : person.sex === 'm' && person.children.length > 0
          ? 'person--father'
          : null
        }

        person--lived-in-${person.century}
        ${person.marked && 'marked-row'}
      `}

      style={
        person.sex === 'f' ? { background: 'lightpink' } : null
      }

      onClick={() => markRow(person.id)}
    >
      <td>{person.id}</td>
      <td style={
        person.born < 1650 
        ? { textDecoration: 'line-through' } 
        : person.died > 1800 
        ? { fontWeight: 'bold' } 
        : null
      }>
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
