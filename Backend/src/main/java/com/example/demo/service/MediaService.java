package com.example.demo.service;

import com.example.demo.model.Folder;
import com.example.demo.model.Media;
import com.example.demo.repository.FolderRepository;
import com.example.demo.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Optional;

@Service
public class MediaService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    private final MediaRepository mediaRepository;
    private final FolderRepository folderRepository;

    public MediaService(MediaRepository mediaRepository, FolderRepository folderRepository) {
        this.mediaRepository = mediaRepository;
        this.folderRepository = folderRepository;
    }

    public Media uploadFile(Long folderId, MultipartFile file) throws IOException {
        Folder folder = folderRepository.findById(folderId).orElseThrow();

        String fileName = file.getOriginalFilename();
        Path folderPath = Paths.get(uploadDir, "media", folder.getName());
        Files.createDirectories(folderPath);

        Path filePath = folderPath.resolve(fileName);
        Files.write(filePath, file.getBytes());

        Media media = new Media();
        media.setName(fileName);
        media.setType(file.getContentType());
        media.setUrl("/uploads/media/" + folder.getName() + "/" + fileName);
        media.setFolder(folder);

        return mediaRepository.save(media);
    }

    public List<Media> getMediaByFolder(Long folderId) {
        Folder folder = folderRepository.findById(folderId).orElseThrow();
        return folder.getMedia();
    }

    public List<Media> getAllMedia() {
        return mediaRepository.findAll();
    }

    public Optional<Media> getMediaById(Long id) {
        return mediaRepository.findById(id);
    }

    public void deleteMedia(Long id) {
        mediaRepository.deleteById(id);
    }
}
