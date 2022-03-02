import React from 'react';
import { Container, Card, ListGroup, Alert } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <section className="pb-5">
                <h1 style={{color:'#457da0'}}>Diccionario Didáctico de Alemán</h1>
                <img src="/img/banner-estudiantes.jpg" className="img-fluid mt-3" alt="Banner de estudiantes"></img>
                <h3 style={{color:'#457da0'}}>Deutsches Lernwörterbuch</h3>
            </section>
            <section className="pb-4">
                <h2>El diccionario...</h2>
                <p>La estructura y contenido de este diccionario te ayudará a aprender alemán a partir de una pieza clave: los verbos. Los verbos son los constructores de las frases porque actúan como aglutinadores de las palabras. Son las piezas centrales de un rompecabezas que es la oración. Como ves en la imagen superior, los verbos los representamos como triángulos y sus argumentos como pentágonos. El diccionario contiene las piezas para construir y entender oraciones en alemán, de él puedes tomar las piezas para construir los rompecabezas: las oraciones.</p>
            </section>
            <section className="pb-4">
                <h2>Los verbos...</h2>
                <p>Existen verbos monovalentes (exigen un único argumento), bivalentes (exigen dos argumentos) y trivalentes (exigen tres argumentos). Por ello, representaremos visualmente los verbos como las piezas centrales de un rompecabezas y mediante triángulos, con un lado correspondiente a cada posible argumento exigido. El triángulo que represente a un verbo monovalente tendrá dos de sus lados planos y otro con un saliente, donde deberá encajar la pieza del rompecabezas que constituye su argumento exigido. El triángulo que represente a un verbo bivalente tendrá tan solo uno de sus lados plano y los otros dos con un saliente, donde deberán encajar las piezas del rompecabezas que constituyen cada uno de los dos argumentos exigidos. El triángulo que represente a un verbo trivalente tendrá sus tres lados con salientes, ya que en cada uno de ellos deberá encajar una de las tres piezas que representan sus argumentos exigidos.</p>
            </section>
            <section className="pb-4">
                <h2>Los argumentos de los verbos...</h2>
                <p>Representamos visualmente los argumentos de un verbo mediante pentágonos. Al contrario que en el caso de los verbos, el color de los pentágonos varía en función del tipo de argumento:</p>
                <ul>
                    <li>Si un argumento presenta los rasgos +animado +humano, será representado mediante un pentágono de color rojo.</li>
                    <li>Si un argumento presenta los rasgos +animado -humano, será representado mediante un pentágono de color naranja.</li>
                    <li>Si un argumento presenta los rasgos -animado +definido, será representado mediante un pentágono de color amarillo.</li>
                    <li>Si un argumento presenta los rasgos -animado -definido, será representado mediante un pentágono de color azul.</li>
                    <li>Si un argumento es un lugar, será representado mediante un pentágono de color verde.</li>
                </ul>
            </section>
            <section className="pb-5">
                <Alert variant="secondary">
                    <Alert.Heading>Más información</Alert.Heading>
                    <p>Encontrarás un vídeo corto sobre cómo usar el diccionario en la página de <a href="/pautas-uso">Pautas para el uso</a>. Te aconsejamos que lo veas si es la primera vez que lo usas. También hay información para los profesores.</p>
                </Alert>
                <p>Este diccionario ha sido creado gracias al soporte de los Proyectos de Innovación Educativa 269-2016 y 193_2017 de la Universidad Complutense de Madrid y el trabajo de los profesores, alumnos y una diseñadora gráfica que aparecemos en la página de <a href="/equipo-trabajo">Equipo de Trabajo</a>.</p>
            </section>
        </Container>
    );
};

export default Home;