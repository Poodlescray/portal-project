package com.example.demo.controller;

import com.example.demo.model.Document;
import com.example.demo.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @PostMapping("/upload/{folderId}")
    public Document uploadFile(@PathVariable Long folderId, @RequestParam("file") MultipartFile file) throws IOException {
        return documentService.uploadFile(folderId, file);
    }

    @GetMapping("/folder/{folderId}")
    public List<Document> getDocumentsByFolder(@PathVariable Long folderId) {
        return documentService.getDocumentsByFolder(folderId);
    }

    @GetMapping
    public List<Document> getAllDocuments() {
        return documentService.getAllDocuments();
    }

}