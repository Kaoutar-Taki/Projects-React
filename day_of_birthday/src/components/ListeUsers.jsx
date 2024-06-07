import React from 'react'

const ListeUsers = ({ people, deleteUser }) => {
    return (
        <ul class="divide-y divide-gray-200 ">
            {people.map(person => (
                <li class="py-3 sm:py-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-full" src={person.image} alt={person.name} />
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate">
                                {person.name}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900">
                            {person.age} years
                        </div>
                        <button className="text-red-500" onClick={() => deleteUser(person.id)}>X</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ListeUsers
