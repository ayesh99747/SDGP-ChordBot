package com.softwareplex.demo.controller;

import com.softwareplex.demo.model.DemoSong;
import com.softwareplex.demo.model.PlaylistSong;
import com.softwareplex.demo.repositories.DemoSongRepository;
import com.softwareplex.demo.repositories.PlaylistSongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/playlistSongs")
public class PlaylistSongApi {
    @Autowired
    private PlaylistSongRepository playlistSongRepository;

    //This url is used to get all the songs in the database
    @RequestMapping(value = "/getAllPlaylistSongs", method = RequestMethod.GET)
    @ResponseBody
    public List<PlaylistSong> getAllPSongs() {
        return PlaylistSongController.getListOfPlaylistSongs();
    }

}