import { useState } from "react"

function Grid() {
    // make an array with 50x50 grid items - dont use push in react state arrays (read only)
    let grid = []
    for (let i = 0; i < 2500; i++) {
        grid.push({ key: i, value: 0 })
    }

    // put the initial created array in a state
    const [newGrid, setNewGrid] = useState(grid)

    const handleClick = (newItem) => {
        const updatedGrid = newGrid.map(item => {
            if (item.key === newItem.key) {
                // you can also use ...key (spread syntax) to include additional key/value pairs
                return { key: item.key, value: item.value + 1 }
            }
            return item
        });

        setNewGrid(updatedGrid)
    }

    return (
        <div className="grid-container">
            {newGrid.map(newItem =>
                <div key={newItem.key} className="grid-item" onClick={() => handleClick(newItem)}>
                    {newItem.value}
                </div>)}
        </div>
    )
}

export default Grid