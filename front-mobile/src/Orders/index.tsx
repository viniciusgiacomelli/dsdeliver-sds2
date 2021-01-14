import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, ScrollView, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { fetchOrders } from "../api";
import Header from "../Header";
import OrderCard from '../OrderCard';
import { Order } from "../types";

function Orders(){

    const [orders, setOrders] = useState<Order[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect( () => {
        setIsLoading(true);
        fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Erro ao careggar pedidos'))
        .finally(() => setIsLoading(false));
    }, []);
    return(
        <>
            <Header/>
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ):(
                orders.map(order => (
                    <TouchableWithoutFeedback key={order.id}>
                        <OrderCard order={order}/>
                    </TouchableWithoutFeedback>
                ))
                )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingRight: '5%',
        paddingLeft: '5%',
    }

});


export default Orders;