import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Person(props) {
  const { person, markRow, columnNames } = props;

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
      {columnNames.map(column => (
        <td
          className={column === 'name' ? personNameCellStyles : null}
          key={column}
        >
          {column === 'children' ? person[column].join(', ') : person[column]}
        </td>
      ))}
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
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Person;
