import React, { useEffect, useState } from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Projects.css'

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}
                        >
                            Name
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('price')}
                            className={getClassNamesFor('price')}
                        >
                            Price
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('time')}
                            className={getClassNamesFor('time')}
                        >
                            Time
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>Rs. {item.price}</td>
                        <td>{item.time} days</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default function Projects() {

    return (
        <div className="container">
            <div className="row">
                <h3 className="projectstitle">Projects</h3>
            </div>
                <div className="row">
                    <ProductTable
                        products={[
                            { id: 1, name: 'Project 1', price: 4.9, time: 20 },
                            { id: 2, name: 'Project 2', price: 1.9, time: 32 },
                            { id: 3, name: 'Project 3', price: 2.4, time: 12 },
                            { id: 4, name: 'Project 4', price: 3.9, time: 9 },
                            { id: 5, name: 'Project 5', price: 0.9, time: 99 },
                            { id: 6, name: 'Project 6 ', price: 2.9, time: 86 },
                            { id: 7, name: 'Project 7', price: 99, time: 12 },
                            { id: 8, name: 'Project 8', price: 4.9, time: 20 },
                            { id: 9, name: 'Project 9', price: 1.9, time: 32 },
                            { id: 10, name: 'Project 10', price: 2.4, time: 12 },
                            { id: 11, name: 'Project 11', price: 3.9, time: 9 },
                            { id: 12, name: 'Project 12', price: 0.9, time: 99 },
                            { id: 13, name: 'Project 13 ', price: 2.9, time: 86 },
                            { id: 14, name: 'Project 14', price: 99, time: 12 },
                            { id: 15, name: 'Project 15', price: 4.9, time: 20 },
                            { id: 16, name: 'Project 16', price: 1.9, time: 32 },
                            { id: 17, name: 'Project 17', price: 2.4, time: 12 },
                            { id: 18, name: 'Project 18', price: 3.9, time: 9 },
                            { id: 19, name: 'Project 19', price: 0.9, time: 99 },
                            { id: 20, name: 'Project 20', price: 2.9, time: 86 },
                            { id: 21, name: 'Project 21', price: 99, time: 12 },
                        ]}
                    />
                </div>
        </div>
    );

}