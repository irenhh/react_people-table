import React from 'react';
import PeopleTable from './PeopleTable';
import './App.css';
import NewPerson from './NewPerson';

class App extends React.Component {
  state = {
    peopleList: [],
    peopleListToShow: [],
    shownPopup: false,
    parents: {
      mother: '',
      father: '',
    },
  }

  componentDidMount = () => {
    fetch('./api/people.json')
      .then(response => response.json())
      .then((result) => {
        const getChildren = (array, parent) => (
          array
            .filter(child => (
              child.father === parent.name || child.mother === parent.name
            ))
            .map(child => child.name)
        );

        const peopleList = result.map((item, index) => (
          {
            ...item,
            id: index + 1,
            age: item.died - item.born,
            century: Math.ceil(item.died / 100),
            children: getChildren(result, item),
            marked: false,
          }
        ));

        this.setState({
          peopleList,
          peopleListToShow: peopleList,
        });
      });
  }

  filter = (event) => {
    this.setState((prevState) => {
      let updatedList = prevState.peopleList;

      updatedList = updatedList.filter((item) => {
        const dataToSort = item.name + item.father + item.mother;

        return dataToSort.toLowerCase().search(
          event.target.value.toLowerCase()
        ) !== -1;
      });

      return { peopleListToShow: updatedList };
    });
  }

  sortBy = (target) => {
    this.setState((prevState) => {
      let sortedArray;

      switch (target) {
        case 'name':
          sortedArray = [...prevState.peopleList]
            .sort((a, b) => a[target].localeCompare(b[target]));

          break;

        default: sortedArray = [...prevState.peopleList]
          .sort((a, b) => a[target] - b[target]);
      }

      return { peopleListToShow: sortedArray };
    });
  }

  markRow = (id) => {
    this.setState((prevState) => {
      const modifiedList = [...prevState.peopleListToShow]
        .map(person => ({
          ...person,
          marked: false,
        }))
        .map((person) => {
          if (person.id === id) {
            return {
              ...person,
              marked: true,
            };
          }

          return person;
        });

      return {
        peopleListToShow: modifiedList,
      };
    });
  }

  submitNewPerson = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let newPerson = {};

    for (const key of data.keys()) {
      newPerson[key] = data.get(String(key));
    }

    newPerson = {
      ...newPerson,
      id: this.state.peopleListToShow.length + 1,
      children: [],
      mother: this.state.parents.mother,
      father: this.state.parents.father,
    };

    this.setState((prevState) => {
      return {
        peopleList: [...prevState.peopleList, newPerson],
        peopleListToShow: [...prevState.peopleListToShow, newPerson],
        shownPopup: false,
      };
    });
  }

  showNewPersonPopup = () => {
    this.setState({ shownPopup: true });
  }

  closeNewPersonPopup =() => {
    this.setState({ shownPopup: false });
  }

  addParent = (parent, event) => {
    this.setState(prevState => ({
      parents: {
        ...prevState.parents,
        [parent]: event.target.value,
      },
    }));
  }

  render() {
    const { peopleListToShow } = this.state;

    return (
      <div className="App">
        <h1 className="app-title">People table</h1>
        <div className="app-title">
          {`(${peopleListToShow.length} people)`}
        </div>

        <form>
          <input
            type="text"
            placeholder="filter by name, mother and father"
            className="app-filtering"
            onChange={this.filter}
          />
        </form>

        {!this.state.shownPopup && (
          <button
            type="button"
            className="adding-new-person"
            onClick={this.showNewPersonPopup}
          >
            Add a new person
          </button>
        )}

        {this.state.shownPopup && (
          <div className="app-popup">
            <NewPerson
              people={this.state.peopleListToShow}
              submitNewPerson={this.submitNewPerson}
              addName={this.addName}
              handleOptionChange={this.handleOptionChange}
              addBirthYear={this.addBirthYear}
              addDeathYear={this.addDeathYear}
              closeNewPersonPopup={this.closeNewPersonPopup}
              addParent={this.addParent}
            />
          </div>
        )}

        <PeopleTable
          people={peopleListToShow}
          sortBy={this.sortBy}
          markRow={this.markRow}
        />
      </div>
    );
  }
}

export default App;
