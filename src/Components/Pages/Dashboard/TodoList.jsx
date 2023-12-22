import { useState } from "react";


const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            'title': 'Working with Project 1',
            'status': 'Pending'
        },
        {
            'title': 'Working with Project 2',
            'status': 'Pending'
        },
    ]);

    const addTodo = (todo) => {
        let newTodos = todos.slice();
        newTodos.unshift(todo);
        setTodos(newTodos);
    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <div className="my-10 mx-auto w-2/4">

                <div className="join mb-10">
                    <input className="input input-bordered join-item" placeholder="input name" />
                    <button className="btn join-item rounded-r-full">Create</button>
                </div>

                <div className="overflow-x-auto shadow-md rounded-xl">
                    <table className="table table-zebra ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo) => (
                                    <tr key={todo.id}>
                                        <td>Cy Ganderton</td>
                                        <td className="btn btn-circle bg-red-500 px-8 text-white my-2">Delete</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    );
};

export default TodoList;