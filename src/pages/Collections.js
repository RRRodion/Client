import {Col, Container, Row} from "react-bootstrap";
import ThemeBar from "../components/ThemeBar";
import CollectionList from "../components/CollectionList";
import {useContext, useEffect, useLayoutEffect} from "react";
import {Context} from "../index";
import {fetchCollection, fetchCollectionByTheme, fetchTheme} from "../http/CollectionApi";

import {observer} from "mobx-react-lite";
import data from "bootstrap/js/src/dom/data";
import CollectionCollection from "../Collections/CollectionCollection";

const Collections = observer(() => {
    const { collection } = useContext(Context);

    useLayoutEffect(() => {
        fetchTheme().then((data) => collection.setTheme(data));
        fetchCollection().then((data) => {
            collection.setCollection(data);
        });
    }, [collection]); // Добавлено collection в зависимости

    useLayoutEffect(() => {
        if (collection.selectedTheme.id) {
            fetchCollectionByTheme(collection.selectedTheme.id)
                .then((data) => collection.setCollection(data))
                .catch((error) => {
                    console.error(error);
                    // Добавьте обработку ошибок, если необходимо
                });
        }
    }, [collection.selectedTheme, collection]); // Добавлено collection в зависимости


    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <ThemeBar />
                </Col>
                <Col md={9}>
                    <CollectionList />
                </Col>
            </Row>
        </Container>
    );
});

export default Collections;