package com.ansou.angularspring.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoResource {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    public TodoResource() {

    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodo(@PathVariable String username) {
        return todoHardCodedService.findAll();
    }
}
