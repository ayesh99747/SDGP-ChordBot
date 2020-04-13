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
    private static String UPLOAD_FOLDER = "src//main//java//com//softwareplex//demo//python_files//Uploads//";

    @PostMapping("/uploadmp3")
    public String singleFileUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            System.out.println("Empty File");
        }
        String output = "";
        try {
            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
            output = "File Received: " + file.getOriginalFilename();
            System.out.println(output);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return output;
    }

}
