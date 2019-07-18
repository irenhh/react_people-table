import React from 'react';
import PropTypes from 'prop-types';

class NewPerson extends React.Component {
  state = {
    currentName: '',
    currentBirthYear: 0,
    currentDeathYear: 0,
    touched: {
      name: false,
      died: false,
    },
  }

  addCurrentInput = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleBlur = (field) => {
    this.setState((prevState) => {
      return {
        touched: { ...prevState.touched, [field]: true },
      };
    });
  }

  validateInput = (input) => {
    switch (input) {
      case 'currentName':
        return /\d|\W/.test(this.state.currentName.replace(/\s/g, ''));

      case 'currentDeathYear':
        return (this.state.currentDeathYear - this.state.currentBirthYear) < 0
        || (this.state.currentDeathYear - this.state.currentBirthYear) >= 150;

      default: return true;
    }
  }

  render() {
    const {
      submitNewPerson,
      people,
      toggleNewPersonPopup,
      addParent,
    } = this.props;

    const getParentList = (array, gender) => {
      return [...array]
        .filter(person => person.born < this.state.currentBirthYear && person.sex === gender);
    };

    const initialMothers = getParentList(people, 'f');
    const initialFathers = getParentList(people, 'm');

    const mothers = initialMothers.length < 1
      ? [{ name: 'unknown', id: Date.now() }]
      : initialMothers;

    const fathers = initialFathers.length < 1
      ? [{ name: 'unknown', id: Date.now() }]
      : initialFathers;

    return (
      <div className="popup-add-new-person">
        <h3 className="popup-title">Adding a new person</h3>

        <button
          type="button"
          className="popup-close"
          onClick={toggleNewPersonPopup}
        >
          x
        </button>

        <form
          onSubmit={submitNewPerson}
          className="popup-form"
        >

          <div className={
            this.validateInput('currentName')
              ? `error-input--message`
              : 'hidden-block'
          }>
            name should contain only letters and spaces
          </div>

          <input
            type="text"
            name="name"
            placeholder="type a name"
            required
            className={this.validateInput('currentName') ? 'error-input' : ''}
            onChange={event => this.addCurrentInput('currentName', event)}
            onBlur={() => this.handleBlur('name')}
          />

          <div className="gender-radio">
            <input
              type="radio"
              name="sex"
              value="m"
              required
            />

            <label>male</label>

            <input
              type="radio"
              name="sex"
              value="f"
              required
            />

            <label>female</label>
          </div>

          <input
            type="number"
            name="born"
            placeholder="type the year of birth"
            required
            onChange={event => this.addCurrentInput('currentBirthYear', event)}
          />

          <div
            className={
              this.validateInput('currentDeathYear')
                ? `error-input--message`
                : 'hidden-block'
            }
          >
            age must me between 0 and 150 years
          </div>

          <input
            type="number"
            name="died"
            placeholder="type the year of death"
            required
            className={
              this.validateInput('currentDeathYear')
                ? `error-input--died error-input`
                : ''
            }

            onChange={event => this.addCurrentInput('currentDeathYear', event)}
            onBlur={() => this.handleBlur('died')}
          />

          <select required onChange={event => addParent('father', event)}>
            <option value="" selected disabled hidden>Choose a father</option>

            {fathers.map(father => (
              <option
                value={father.name}
                name="father"
                key={father.id}
              >
                {father.name}
              </option>
            ))}
          </select>

          <select required onChange={event => addParent('mother', event)}>
            <option value="" selected disabled hidden>Choose a mother</option>

            {mothers.map(mother => (
              <option
                value={mother.name}
                name="mother"
                key={mother.id}
              >
                {mother.name}
              </option>
            ))}
          </select>

          <button type="submit">
            Add new person
          </button>
        </form>
      </div>
    );
  }
}

NewPerson.propTypes = {
  submitNewPerson: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleNewPersonPopup: PropTypes.func.isRequired,
  addParent: PropTypes.func.isRequired,
};

export default NewPerson;
