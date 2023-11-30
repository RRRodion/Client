import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, FormControl, InputGroup, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, COLLECTIONS_ROUTE, LOGIN_ROUTE, USERCOL_ROUTE, USERCOLLETION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
        localStorage.removeItem('token');
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand style={{ color: 'white', cursor:'pointer'}}  onClick={() => navigate(COLLECTIONS_ROUTE)}>Коллекции</Navbar.Brand>
                <InputGroup className="w-auto mx-4">
                    <FormControl
                        type="text"
                        placeholder="Поиск..."
                        aria-label="Поиск"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Найти
                    </Button>
                </InputGroup>
                {user.isAuth ?
                    <Nav className="ms-lg-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(USERCOLLETION_ROUTE)}
                        >
                            Мои коллекции
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                            style={{ marginLeft: '10px' }}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={()=> logOut()}
                            className="ms-lg-4"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-lg-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    )
})

export default NavBar;