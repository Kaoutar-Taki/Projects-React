import React from 'react'

const ListeUsers = ({ people, deleteUser }) => {
    return (
        <ul className="divide-y divide-gray-200">
            {people.map(person => (
                <li key={person.id} className="py-4">
                    <div className="flex items-center">
                        <img className="w-12 h-12 rounded-full mr-4" src={person.image} alt={person.name} />
                        <div>
                            <p className="text-gray-900 font-medium">{person.name}</p>
                            <p className="text-gray-500">{person.age} years old</p>
                        </div>
                        <button className="ml-auto text-red-500" onClick={() => deleteUser(person.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ListeUsers
