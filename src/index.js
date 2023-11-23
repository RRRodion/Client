import React, { createContext } from 'react';
import App from './App';
import UserCollections from './Collections/UserCollections';
import CollectionCollection from './Collections/CollectionCollection';
import ItemCollection from './Collections/ItemCollection';
import {createRoot} from "react-dom/client";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);

const root = createRoot(document.getElementById('root'));

root.render(
    <Context.Provider
        value={{
            user: new UserCollections(),
            collection: new CollectionCollection(),
            item: new ItemCollection(),
        }}
    >
        <App />
    </Context.Provider>
);
