import React from 'react';
import ListeUsers from './components/ListeUsers';
import users from './data';

function App() {
  const [people, setPeople] = React.useState(users);

  const deleteUser = (userId) => {
    const updatedPeople = people.filter(person => person.id !== userId);
    setPeople(updatedPeople);
  };

  const sortAlphabetically = () => {
    const sortedPeople = [...people].sort((a, b) => a.name.localeCompare(b.name));
    setPeople(sortedPeople);
  };

  const sortByAge = () => {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    setPeople(sortedPeople);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Birthdays Today</h1>
      <div className="flex space-x-4 mb-4">
        <button onClick={sortAlphabetically} className="text-sm font-medium text-blue-600 hover:underline bg-blue-400 px-4 py-2 rounded-lg">
          Sort Alphabetically
        </button>
        <button onClick={sortByAge} className="text-sm font-medium text-blue-600 hover:underline bg-blue-400 px-4 py-2 rounded-lg">
          Sort by Age
        </button>
        <button onClick={() => setPeople([])} className="text-sm font-medium text-red-600 hover:underline bg-red-400 px-4 py-2 rounded-lg">
          Clear all
        </button>
      </div>
      <ListeUsers people={people} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
