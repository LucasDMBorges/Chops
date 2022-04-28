import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import { carregaTopo } from '../../../servicos/carregaDados';
import logo from '../../../assets/logo-chops.png';

class Topo extends React.Component{
    atualizaTopo(){
        const retorno = carregaTopo();
        console.log(retorno);
    }
    componentDidMount(){
        this.atualizaTopo();
    }
    render() {
    return <View style={estilos.topo}>
           <Image source={logo} style={estilos.imagem} />
           <Text style={estilos.boasVindas}>Olá Lucas</Text>
           <Text style={estilos.legenda}>Encontre as melhores cervejarias</Text>
           </View>
           }
}

const estilos = StyleSheet.create({
    topo:{
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem:{
        width: 84,
        height: 34,
    },
    boasVindas:{
        marginTop: 24,
        fontSize:26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: 'black'
    },
    legenda:{
        fontSize: 16,
        lineHeight: 26,
        color:'black'

    }

});

export default Topo;