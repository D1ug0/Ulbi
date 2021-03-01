import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import DeviceItem from "./DeviceItem";
import {Button, Row} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import {deleteBasketDevice} from "../http/basketApi";
import BasketItem from "./BasketItem";

const BasketList = observer(({basket}) => {
    const {device} = useContext(Context)

    function checkJwt(){
        const a = localStorage.getItem('token')
        return jwt_decode(a)
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <Row className="d-flex ml-5">
                {device.devices.map( function(device){
                        if(device.id === basket.deviceId && basket.basketId===checkJwt().id){
                            return <BasketItem key={device.id} device={device}/>
                        }
                    }
                )}
            </Row>
        </div>
    );
});

export default BasketList;