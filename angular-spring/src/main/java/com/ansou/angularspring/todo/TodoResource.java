package com.ansou.angularspring.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoHardCodedService.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardCodedService.deleteById(id);
        if (todo != null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo todoUpdated = todoHardCodedService.save(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }


    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> postTodo(@PathVariable String username, @RequestBody Todo todo) {
        Todo createdTodo = todoHardCodedService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
