package com.example.demo.controller;

import com.example.demo.model.Folder;
import com.example.demo.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/folders")
public class FolderController {

    @Autowired
    private FolderService folderService;

    @PostMapping
    public Folder createFolder(@RequestBody Folder folder) {
        return folderService.createFolder(folder);
    }
    @GetMapping("/type/{type}")
    public List<Folder> getFoldersByType(@PathVariable String type) {
        return folderService.getFoldersByType(type);
    }

    @GetMapping
    public List<Folder> getAllFolders() {
        return folderService.getAllFolders();
    }
}
