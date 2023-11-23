import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const ThemeBar = observer(() => {
    const {collection} = useContext(Context)
    return (
        <ListGroup>
            {collection.theme.map(theme =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={theme.id === collection.selectedTheme.id}
                    onClick={() => collection.setSelectedTheme(theme)}
                    key ={theme.id}
                >
                    {theme.title}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default ThemeBar;

