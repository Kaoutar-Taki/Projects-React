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
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">Birthdays Today</h5>
        <div className="flex space-x-4">
          <button onClick={sortAlphabetically} className="text-sm font-medium text-blue-600 hover:underline bg-blue-400 px-4 py-2 rounded-lg">
            Sort Alphabetically
          </button>
          <button onClick={sortByAge} className="text-sm font-medium text-blue-600 hover:underline">
            Sort by Age
          </button>
          <button onClick={() => setPeople([])} className="text-sm font-medium text-blue-600 hover:underline">
            Clear all
          </button>
        </div>
      </div>
      <div className="flow-root">
        <ListeUsers people={people} deleteUser={deleteUser} />
      </div>
    </div>
  );
}

export default App;
