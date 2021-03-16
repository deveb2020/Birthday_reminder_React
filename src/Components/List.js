import React from 'react'
import "../Style/List.css"


function List({people}) {

    return(
        <section className="people-wrapper">
            {people.map((person) => {
                return (
                    <section key={person.id} className="person-wrapper">
                        <div className="person-photo">
                            <img src={person.image} alt={person.name} />
                        </div>
                        <div className="name-age-wrapper">
                            <h2 className="name">{person.name}</h2>
                            <p className="age">{person.age} years</p>
                        </div>
                    </section>
                )
            })}
        </section> 
    )
}

export default List