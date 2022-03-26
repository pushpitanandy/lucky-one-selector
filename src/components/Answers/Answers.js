import React from 'react';
import './Answers.css';

const Answers = () => {
    return (
        <div>
            <h1>Bonus Section</h1>
            <div className="answers">
                <div className='first-answer'>
                    <h3>How React Works?</h3>
                    <p>React always has a copy of the DOM which is known as Virtual DOM. It helps React to check for any changes that occurs in the DOM.</p>
                    <p>React has Diff Algorithm which works with the Virtual DOM to track the changes, by matching the virtual DOM with the original DOM, and update the original DOM by executing the required changes in it.</p>
                </div>
                <div className='second-answer'>
                    <h3>Props Vs State</h3>
                    <p>Props is the data that can be sent from one component to another. But it cannot be modified as the props are read-only data. It can be used with state.</p>
                    <p>In case of State, the data can only be passed within the component where the state is declared. It can be changed by using 'this.setState()' and the changes can be asynchronous. We can also send the state into components via props and it gets updated as the state changes.</p>
                </div>
            </div>
        </div>
    );
};

export default Answers;