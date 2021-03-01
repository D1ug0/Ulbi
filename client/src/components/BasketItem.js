import React, {useContext} from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {DEVICE_ROUTE} from "../utils/consts";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom";
import {deleteBasketDevice} from "../http/basketApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BasketItem = observer(({device}) => {
    const history = useHistory()
    const {basket} = useContext(Context)

    console.log(basket)

    const deleteDevice = () => {
        deleteBasketDevice(basket.id).then(data=>data)
    }

    return (

        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"danger"}>
                <Image width={145} height={150} style={{padding: 2}} src={process.env.REACT_APP_API_URL + device.img}
                       onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around", marginTop:"2px", padding: "5px"}}>
                    {device.name}
                    <Button onClick={deleteDevice}>x</Button>
                </div>
            </Card>
        </Col>
    );
});

export default BasketItem;