package com.softwareplex.demo.controller;

import com.softwareplex.demo.model.DemoSong;
import com.softwareplex.demo.repositories.DemoSongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/demosongs")
public class DemoSongApi {
    @Autowired
    private DemoSongRepository demoSongRepository;

    //This url is used to get all the songs in the database
    @RequestMapping(value = "/getAllDemoSongs", method = RequestMethod.GET)
    @ResponseBody
    public List<DemoSong> getAllSongs() {
        return DemoSongController.getListOfDemoSongs();
    }

}