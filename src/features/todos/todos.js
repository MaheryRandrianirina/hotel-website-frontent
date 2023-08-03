import { useSelector, useDispatch } from "react-redux"
import { selectTodos, toggleCompletion } from "./todoSlice"

export default function Todos(){
    const {todos} = useSelector(selectTodos)
    const dispatch = useDispatch()
    return <div>
        {JSON.stringify(todos)}
        <ul>
        {todos.map(todo => <li key={todo.id}>
            <h2>{todo.title}</h2>
            <input type='checkbox' checked={todo.completed} onChange={()=>dispatch(toggleCompletion(todo))}/>
        </li>)}
        </ul>
        TODO POUR APPRENTISSAGE DE REDUX
    </div>
}