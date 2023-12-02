import React, { useState } from 'react';

const ComplexState = () => {
    const [user, setUser] = useState({ name: 'Alice', age: 25 });

    const handleNameChange = (name) => {
        setUser({ ...user, name });
    };

    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <input
                type="text"
                placeholder="Enter new name"
                onChange={(e) => handleNameChange(e.target.value)}
            />
        </div>
    );
};

export default ComplexState;
;

