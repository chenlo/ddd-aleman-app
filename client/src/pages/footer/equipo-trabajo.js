import React from 'react';
import { Container } from 'react-bootstrap';

const EquipoTrabajo = () => {
    return (
        <Container fluid>
            <h2 className="pb-3">Equipo de trabajo - Miembros</h2>
            <div className="pb-4">
                <p>Este diccionario ha sido creado gracias al trabajo de los profesores, alumnos y técnicos en diseño y medios audiovisuales siguientes:</p>
                <ul>
                    <li>Manuel Márquez Cruz (Facultad de Filología. UCM)</li>
                    <li>Paloma Sánchez Hernández (Facultad de Filología. UCM)</li>
                    <li>Jose Joaquín Caerols Pérez (Facultad de Filología. UCM)</li>
                    <li>Julián Muñoz Pérez (Facultad de Filología. UCM)</li>
                    <li>Alfredo Fernández-Valmayor Crespo (Facultad de Informática. UCM)</li>
                    <li>Antonio Sarasa Cabezuelo (Facultad de Informática.UCM)</li>
                    <li>Jose Luis Sierra Rodríguez (Facultad de Informática. UCM)</li>
                    <li>Antonio Jesús Laguna García-Navas (Colegio Jesús María, Madrid)</li>
                    <li>Óscar Patón Cordero (Ed. Secundaria)</li>
                    <li>Angie Xiomara Rodríguez (Estudiante del Grado de Lingüística y Lenguas Aplicadas. Facultad de Filología. UCM)</li>
                    <li>Kerstin Schwandtner (Facultad de Filología. UCM)</li>
                    <li>Adrian Menéndez de la Cuesta (Estudiante Máster de Letras Digitales. Universidad Complutense de Madrid)</li>
                    <li>Cristina Álvarez Martínez (Estudiante Máster de Letras Digitales.Facultad de Filología. Universidad Complutense de Madrid)</li>
                    <li>Teresa Comino Moreno (Estudiante Máster de Letras Digitales. Facultad de Filología. Universidad Complutense de Madrid)</li>
                    <li>María Elena Carreras Huerta (Estudiante de doctorado. UCM)</li>
                    <li><a href="https://www.ucm.es/afpc/" target="_blank">Ana Fernández-Pampillón Cesteros</a> (coordinación)</li>
                    <li>Diseño iconos: <a href="http://saraolmos.com/" target="_blank">Sara Olmos</a></li>
                </ul>
            </div>
        </Container>
    );
};

export default EquipoTrabajo;