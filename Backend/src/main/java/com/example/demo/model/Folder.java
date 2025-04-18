package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Folder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "folder", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Document> documents;

    @OneToMany(mappedBy = "folder", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Media> media;

    @Column(name = "type")
    private String type;

}
