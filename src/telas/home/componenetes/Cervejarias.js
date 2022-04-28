import React, {useEffect, useState} from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

import Cervejaria from './Cervejaria';
import useCervejarias from '../../../hooks/useProdutores';

export default function Cervejarias({topo: Topo}){
    const [titulo, lista] = useCervejarias();

       const TopoLista = () => {
           return<>
           <Topo />
           <Text style={estilos.titulo}>{ titulo }</Text>
           </>
       }

       return <FlatList
       data={lista}
       renderItem={({item}) => <Cervejaria {...item}/> }
       keyExtractor={({nome}) => nome}
       ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})
    