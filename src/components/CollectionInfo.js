// В CollectionInfo.js
import React, { useContext } from 'react';
import {Col, Image, ListGroup, Row} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const CollectionInfo = observer(() => {
    const { collection } = useContext(Context);
    const { id } = useParams();
    const selectedCollection = collection.collection.find((item) => item.id === Number(id));

    return (
        <Row>
            <Col md={3}>
                <div>
                    <Image width={150} height={150} src={process.env.REACT_APP_API_URL + selectedCollection.image_url} />
                    <ListGroup>
                        <ListGroup.Item>
                            {selectedCollection.title}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {selectedCollection.description}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
            <Col md={9}>
                <ItemList collectionId={selectedCollection.id} />
            </Col>
        </Row>
    );
});

export default CollectionInfo;
