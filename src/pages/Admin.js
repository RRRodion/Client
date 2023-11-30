import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateTheme from "../components/modals/CreateTheme";

const Admin = () => {
    const [themeVisible, setThemeVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Пользователи
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Коллекции
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setThemeVisible(true)}
            >
                Создать тему
            </Button>
            <CreateTheme show={themeVisible} onHide={() => setThemeVisible(false)}/>
        </Container>
    );
};

export default Admin;