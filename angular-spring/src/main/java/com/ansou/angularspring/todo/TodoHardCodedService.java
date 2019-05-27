package com.ansou.angularspring.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "simon", "The Napa", new Date(), false));
        todos.add(new Todo(++idCounter, "eunju", "Short stroke", new Date(), false));
        todos.add(new Todo(++idCounter, "sohyeon", "Long Stroke", new Date(), false));
        todos.add(new Todo(++idCounter, "omma", "Mother", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findBy(id);
        if (todo == null)
            return null;
        if (todos.remove(todo))
            return todo;
        return null;
    }

    public Todo findBy(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id)
                return todo;
        }
        return null;
    }
}