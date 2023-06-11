import React from 'react';
import './App.css';
import {splitIntoWords} from './01-Hello-test/01';

function App() {
    const names = ["Dimych", "Sveta", "Viktor", "Ignat"]
    const liElements = names.map(n => <li>{n}</li>)

    const users = [{name:"Dimych"}, {name:"Sveta"}, {name:"Viktor"}, {name:"Ignat"}]
    const liElements2 = users.map((u,index) => <li key = {index}>{index+1} - {u.name}</li>)
    //вместо индекса обычно используют id
    return (
        <div>
            <ul>
                {liElements}
                {liElements2}
            </ul>
        </div>


    );
}

export default App;
