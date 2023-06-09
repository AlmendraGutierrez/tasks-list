import { Task } from "./Task"

// Arreglo de las tareas que va a tener. Simulará una base de datos en json
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Terminar primer modulo de Angular',
        day: 'Agosto 5 a las 12:00',
        reminder: true
    },
    {
        id: 2,
        text: 'Hacer unas compras para cenar',
        day: 'Agosto 5 a las 17:00',
        reminder: true
    },
    {
        id: 3,
        text: 'Investigar sobre Boostrap',
        day: 'Agosto 5 a las 19:00',
        reminder: false
    },
    {
        id: 4,
        text: 'Leer mi libro favorito',
        day: 'Agosto 5 a las 21:00',
        reminder: false
    }
]