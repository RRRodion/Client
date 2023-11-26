// В ItemList.js
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ItemItem from './ItemItem';
import CollectionItem from "./CollectionItem";

const ItemList = observer(({ collectionId }) => {
    const { item } = useContext(Context);
    const filteredItems = item.item.filter((item) => item.collection_id === collectionId);

    return (
        <Row className="d-flex">
            {filteredItems && filteredItems.map((item) => (
                <ItemItem key={item.id} item={item} />
            ))}
        </Row>
    );
});

export default ItemList;
