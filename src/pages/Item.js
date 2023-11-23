import React, {useContext} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import like_off from '../assets/like_off.png'
import {Context} from "../index";
import {useParams} from "react-router-dom";
const Item = () => {
    const { item } = useContext(Context);
    const { id } = useParams();
    const selectedItem = item.item.find((item) => item.id === Number(id));
    //const item = {id:1,title:"Beach Sunset", image_url:"https://media.istockphoto.com/id/1300296030/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%BB%D1%8F%D0%B6-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D1%8B-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F-%D0%B2%D0%BE%D0%BB%D0%BD%D0%B0-%D0%B8-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BF%D0%B5%D1%81%D0%BE%D0%BA.jpg?s=612x612&w=0&k=20&c=m-pXllSgP-vqWxn7rOo8t1FuXrXnyJkbkDVYdKob8ZU="}
    return (

        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <img width={300} height={300} src={selectedItem.image_url}/>
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