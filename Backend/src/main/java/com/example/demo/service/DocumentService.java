package com.example.demo.service;

import com.example.demo.model.Document;
import com.example.demo.model.Folder;
import com.example.demo.repository.DocumentRepository;
import com.example.demo.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private FolderRepository folderRepository;

    public Document uploadFile(Long folderId, MultipartFile file) throws IOException {
        Folder folder = folderRepository.findById(folderId).orElseThrow();

        String fileName = file.getOriginalFilename();
        Path folderPath = Paths.get(uploadDir, folder.getName());
        Files.createDirectories(folderPath);

        Path filePath = folderPath.resolve(fileName);
        Files.write(filePath, file.getBytes());

        Document document = new Document();
        document.setName(fileName);
        document.setType(file.getContentType());
        document.setUrl("/uploads/" + folder.getName() + "/" + fileName);

        document.setFolder(folder);

        return documentRepository.save(document);
    }

    public List<Document> getDocumentsByFolder(Long folderId) {
        Folder folder = folderRepository.findById(folderId).orElseThrow();
        return folder.getDocuments();
    }

    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    public Optional<Document> getDocumentById(Long id) {
        return documentRepository.findById(id);
    }

    public void deleteDocument(Long id) {
        documentRepository.deleteById(id);
    }
}
