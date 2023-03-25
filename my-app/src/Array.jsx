import React, { useState } from 'react'

function Array() {
    const [items, SetItems] = useState([])
    const addItems = () => {
        SetItems(
            [...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10)+1
            }
            ]

        )
    }
    return (
        <div>
            <button onClick={addItems}> math random</button>

            <ul>
                {
                    items.map((item) => 
                        <li key={item.id}>{item.value}</li>)
                }
            </ul>


        </div>
    )
}

export default Array
