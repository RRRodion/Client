import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CollectionInfo from "../components/CollectionInfo";
import ItemList from "../components/ItemList";

const Collection = () => {
    return (
        <Container>
            <Row className="mt-3">
                <CollectionInfo/>
            </Row>
        </Container>
    );
};

export default Collection;