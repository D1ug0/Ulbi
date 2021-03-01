import React, {useContext, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import BasketList from "../components/BasketList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getBasketDevice} from "../http/basketApi";
import {fetchDevicesBasket} from "../http/deviceAPI";

const Basket = observer(() => {
    const {basket} = useContext(Context)
    const {device} = useContext(Context)

    useEffect(() => {
        getBasketDevice().then(data => basket.setBasket(data))
    }, [basket])

    useEffect(() => {
        fetchDevicesBasket().then(data => {
            device.setDevices(data.rows)
        })
    }, [])

    return (
        <Container className="d-flex flex-row flex-wrap">
            {basket.baskets.map(basket =>
                <BasketList key={basket.id} basket={basket}/>
            )}
        </Container>
    );
});

export default Basket;