import calango from '../assets/cervejarias/calango-logo.png';
import laut from '../assets/cervejarias/Laut.png';
import corina from '../assets/cervejarias/corina-logo.png';
import hopcapital from '../assets/cervejarias/hopcapital-logo.png';
import jinbeer from '../assets/cervejarias/jinbeer-logo.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1)+min);
}

const cervejarias = {
    titulo: "Cervejarias",
    lista: [
        {
            nome: "Calango",
            imagem: calango,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Laüt",
            imagem: laut,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Corina",
            imagem: corina,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Hop Capital",
            imagem: hopcapital,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jinbeer",
            imagem: jinbeer,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default cervejarias;