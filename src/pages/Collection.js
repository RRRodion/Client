import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CollectionInfo from "../components/CollectionInfo";
import ItemList from "../components/ItemList";
import ThemeBar from "../components/ThemeBar";
import CollectionList from "../components/CollectionList";
import {fetchItem} from "../http/ItemApi";
import {Context} from "../index";

const Collection = () => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchItem().then(data => item.setItem(data))
    }, []);

    return (
        <Container>
            <Row className="mt-3">
                <CollectionInfo/>
            </Row>
        </Container>
    );
};

export default Collection;