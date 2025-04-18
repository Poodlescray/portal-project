package com.example.demo.controller;

import com.example.demo.model.Media;
import com.example.demo.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/media")
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @PostMapping("/upload/{folderId}")
    public Media uploadFile(@PathVariable Long folderId, @RequestParam("file") MultipartFile file) throws IOException {
        return mediaService.uploadFile(folderId, file);
    }

    @GetMapping("/folder/{folderId}")
    public List<Media> getMediaByFolder(@PathVariable Long folderId) {
        return mediaService.getMediaByFolder(folderId);
    }

    @GetMapping
    public List<Media> getAllMedia() {
        return mediaService.getAllMedia();
    }
}
