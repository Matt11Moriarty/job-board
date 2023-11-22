import React from 'react';

const Filter = ({ filter, setFilter, search, setSearch }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <h1>All Applications</h1>
            <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
                <label>
                    Filter By:
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="name">Name</option>
                        <option value="time">Time</option>
                        <option value="job">Job</option>
                    </select>
                </label>
                <label>
                    Name Search:
                    <input type="text" value={search} onChange={handleSearchChange} />
                </label>
            </div>
        </div>
    );
};

export default Filter;