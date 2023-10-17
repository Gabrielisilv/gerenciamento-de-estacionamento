import react from 'react';
import {link} from 'react-router-dom';

function header() {
    return header(
        <header>
            <nav>
                <ul>
                    <li><link to="/">Home</link></li>
                    <li><link to="/cadastro"> cadastrar reserva</link></li>
                </ul>
            </nav>
        </header>
    );
}

export default header;