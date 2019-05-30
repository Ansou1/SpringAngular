package com.ansou.angularspring.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.Console;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    public TodoJpaResource() {

    }

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodo(@PathVariable String username) {
        return todoJpaRepository.findByUsername(username);
        //return todoHardCodedService.findAll();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoJpaRepository.findById(id).get();
        //return todoHardCodedService.findById(id);
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        todoJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo todoUpdated = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }


    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createdTodo(@PathVariable String username, @RequestBody Todo todo) {

        todo.setUsername(username);
        System.out.println("Here => " + todo.getUsername());
        Todo createdTodo = todoJpaRepository.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
