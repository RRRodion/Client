import React, { useContext } from 'react';
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Context } from "../index";
import { ADDCOLLECTION_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const UserCollection = observer(() => {
    const navigate = useNavigate();
    const { collection } = useContext(Context);
    const current_user_id = parseInt(localStorage.getItem("id"));

    const myCollections = collection.collection.filter(collection => collection.user_id === current_user_id);

    const handleCollectionClick = (collectionId) => {
        // Переход к странице просмотра коллекции с использованием id
        navigate(`/collection/${collectionId}`);
    };

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <Button
                        style={{ cursor: 'pointer' }}
                        variant={"outline-dark"}
                        onClick={() => navigate(ADDCOLLECTION_ROUTE)}
                    >
                        Добавить коллекцию
                    </Button>
                </Col>
                <Col md={9}>
                    <ListGroup>
                        {myCollections.map(collection => (
                            <ListGroup.Item
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleCollectionClick(collection.id)} // Добавлен обработчик клика
                                key={collection.id}
                            >
                                {collection.name}
                                {collection.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
});

export default UserCollection;
