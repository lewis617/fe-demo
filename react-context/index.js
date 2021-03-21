import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const Context = createContext(1);
const Child = () => {
    const context = useContext(Context);
    return (
        <div>{context}</div>
    );
}
const Parent = () => {
    return (
        <Context.Provider value={2}>
            <Child />
        </Context.Provider>
    )
};

ReactDOM.render(<Parent />, document.getElementById('app'));