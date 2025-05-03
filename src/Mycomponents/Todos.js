import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h2 className='text-center'>Todos</h2>
            {props.todos.length == 0 ? "no todos to display" :
                    props.todos.map((todo) => {
                        return <TodoItems todo={todo} onDelete={props.onDelete} />
                    })
                }
        </div>
    )
}

