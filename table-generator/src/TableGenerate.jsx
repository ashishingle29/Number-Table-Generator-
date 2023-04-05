import React, { useState } from "react";
import './TableGenerate.css'

function TableGenerator() {
    const [number, setNumber] = useState(0);
    const [table, setTable] = useState([]);

    const handleNumberChange = (event) => {
        const num = parseInt(event.target.value);
        setNumber(num);
        generateTable(num);
    };

    const generateTable = (num) => {
        const tableData = [];
        for (let i = 1; i <= 10; i++) {
            tableData.push(`${num} x ${i} = ${num * i}`);
        }
        setTable(tableData);
    };

    return (
        <div className="table-generator">
            <label htmlFor="number-input">Enter a number:</label>
            <input
                id="number-input"
                type="number"
                value={number}
                onChange={handleNumberChange}
                className="number-input"
            />
            <table className="results-table">
                <thead>
                    <tr>
                        <th>Operation</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((operation, index) => (
                        <tr key={index}>
                            <td>{operation.split("= ")[0]}</td>
                            <td>{operation.split("= ")[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableGenerator;
