import {Col, Container, Row} from "react-bootstrap";
import ThemeBar from "../components/ThemeBar";
import CollectionList from "../components/CollectionList";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {fetchCollection, fetchTheme} from "../http/CollectionApi";

import {observer} from "mobx-react-lite";

const Collections = observer(() => {
    const {collection} = useContext(Context)

    useEffect(() => {
        fetchTheme().then(data => collection.setTheme(data))
        fetchCollection().then(data => collection.setCollection(data))
    }, [collection.selectedCollection, collection.selectedTheme]); // ?????

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <ThemeBar/>
                </Col>
                <Col md={9}>
                    <CollectionList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Collections;