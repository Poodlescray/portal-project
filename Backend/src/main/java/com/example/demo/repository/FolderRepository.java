package com.example.demo.repository;

import com.example.demo.model.Folder;
import org.springframework.data.jpa.repository. JpaRepository;
import java.util.List;

public interface FolderRepository extends JpaRepository<Folder, Long> {
    List<Folder> findByType(String type);
}