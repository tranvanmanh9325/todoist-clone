package com.example.todo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Task title is required")
    private String title;

    private boolean completed;

    private String note;

    private String project;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;

    public Task() {}

    public Task(String title, boolean completed, String note, String project) {
        this.title = title;
        this.completed = completed;
        this.note = note;
        this.project = project;
    }
}
