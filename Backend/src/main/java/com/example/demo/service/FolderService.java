package com.example.demo.service;

import com.example.demo.model.Folder;
import com.example.demo.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FolderService {

    @Autowired
    private FolderRepository folderRepository;

    public Folder createFolder(Folder folder) {
        if (folder.getName() == null || folder.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Folder name cannot be empty.");
        }
        return folderRepository.save(folder);
    }

    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    public List<Folder> getFoldersByType(String type) {
        return folderRepository.findByType(type);
    }

    public Optional<Folder> getFolderById(Long id) {
        return folderRepository.findById(id);
    }

    public void deleteFolder(Long id) {
        folderRepository.deleteById(id);
    }
}
