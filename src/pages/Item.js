import React, {useContext, useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchItem} from "../http/ItemApi";
const Item = () => {
    const { item } = useContext(Context);
    const { id } = useParams();
    const selectedItem = item.item.find((item) => item.id === Number(id));

    return (

        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <img width={300} height={300} src={process.env.REACT_APP_API_URL + selectedItem.image_url}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{selectedItem.title}</h2>
                        <h2>теги: {selectedItem.tags}</h2>
                        <button
                            variant={"outline-dark"}
                            className="d-flex align-items-center justify-content-center"
                        >
                            лайк
                            <Image width={50} height={50} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufT1M1JVATC1MFYeifW_RfhEmFyiGiGg4-g&usqp=CAU'}/>
                        </button>
                    </Row>
                </Col>
                <Col md={4}>

                </Col>
            </Row>

        </Container>
    );
};

export default Item;