import React, {useContext, useEffect} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchItem} from "../http/ItemApi";
import {observer} from "mobx-react-lite";
const Item = observer(() => {
    const { item } = useContext(Context);
    const { id } = useParams();
    const selectedItem = item.item.find((item) => item.id === Number(id));

    return (

        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <img width={300} height={300} src={process.env.REACT_APP_API_URL + selectedItem.image_url}/>
                </Col>
                <Col md={2}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{selectedItem.title}</h2>
                        <h2>теги: {selectedItem.tags}</h2>
                        <Button
                            variant={"outline-dark"}
                            className="d-flex align-items-center"
                        >
                            <Image width={20} height={20} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufT1M1JVATC1MFYeifW_RfhEmFyiGiGg4-g&usqp=CAU'} />
                            <span className="ms-2">Лайк</span>
                        </Button>
                    </Row>
                </Col>
                <Col md={6}>

                </Col>
            </Row>

        </Container>
    );
});

export default Item;