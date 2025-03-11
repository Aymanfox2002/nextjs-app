"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let result = await response.json();
      setTodo(result);
    };

    fetchTodo();
  }, []);

  return (
    <h3>{todo.title} "CSR"</h3>
  );
}
