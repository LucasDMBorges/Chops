import {useState, useEffect} from 'react';

import { carregaCervejarias } from '../servicos/carregaDados';

export default function useCervejarias(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() =>{
        const retorno = carregaCervejarias();
        setTitulo(retorno.titulo);
        console.log(retorno);
        setLista(retorno.lista);
    }, []);

    return [ titulo, lista];
}