package com.softwareplex.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@Controller
@RequestMapping("/api/fileupload")
public class FileUploadApi {
    //Save the uploaded file to this folder
    private static String UPLOAD_FOLDER = "src\\main\\resources\\Uploads\\";

    @PostMapping("/uploadmp3")
    public String singleFileUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            System.out.println("[SERVER] - Empty File has been uploaded!");
            return "[Error] - Empty File has been uploaded!";
        }
        String output = "";
        try {
            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
            output = "File Received: " + file.getOriginalFilename();
            System.out.println("[SERVER] - " + output);
            FileUploadController.invokeGetter("C:\\Users\\ayesh\\SDGP-ChordBot\\chordbot-server\\src\\main\\java\\com\\softwareplex\\demo\\resources\\Uploads\\audio.wav");
        } catch (IOException e) {
            System.out.println("ERROR");
            System.out.println(e.toString());
        }
        return output;
    }

}
