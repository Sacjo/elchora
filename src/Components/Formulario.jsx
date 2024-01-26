import { useState } from 'react';
import { database } from '../Credenciales'; // Asegúrate de que la ruta sea correcta
import { ref, push } from "firebase/database";

const FormularioRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Crear una referencia a la base de datos
        const dbRef = ref(database, 'usuarios');

        // Guardar los datos en Firebase
        const usuario = { nombre, apellido };
        push(dbRef, usuario)
            .then(() => {
                console.log('Datos guardados con éxito');
                setNombre('');
                setApellido('');
            })
            .catch((error) => {
                console.error('Error al guardar los datos:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Apellido:</label>
                <input 
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default FormularioRegistro;