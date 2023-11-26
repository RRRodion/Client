import React from 'react';
import { ITEM_ROUTE} from "../utils/consts";
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ItemItem = ({item}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}>
            <Card
                style={{width: 150, cursor:'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + item.image_url}/>
                <div>
                    {item.title}
                </div>
            </Card>
        </Col>
    );
};

export default ItemItem;