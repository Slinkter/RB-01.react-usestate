import { act } from "@testing-library/react";
import React, { useReducer, useState } from "react";

const initialTodos = [
    { id: 1, title: "todo#1" },
    { id: 2, title: "todo#2" },
];

const types = {
    add: "add",
    update: "update",
    delete: "delete",
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.delete:
            return state.filter((todo) => todo.id !== action.payload);

        case types.add:
            return [...state, action.payload];
        case types.update:
            return state.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        default:
            return state;
    }
};

const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialTodos);
    const [text, setText] = useState("");

    return (
        <div>
            <h2>
                <ul>
                    {state.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: types.delete,
                                        payload: todo.id,
                                    })
                                }
                            >
                                delete
                            </button>
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: types.update,
                                        payload: { ...todo, title: text },
                                    })
                                }
                            >
                                update
                            </button>
                        </li>
                    ))}
                </ul>
            </h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const newTodo = { id: Date.now(), title: text };
                    dispatch({ type: types.add, payload: newTodo });
                }}
            >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    );
};

export default TodoApp;
