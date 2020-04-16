package com.softwareplex.demo.controller;

import com.softwareplex.demo.model.DemoSong;

import java.util.ArrayList;
import java.util.List;

public class DemoSongController {
    private static List<DemoSong> listOfDemoSongs = new ArrayList<DemoSong>();

    public static List<DemoSong> getListOfDemoSongs() {
        return listOfDemoSongs;
    }

    public static void addDemoSongsFromDatabase(List<DemoSong> listOfDemoSongsFromDb) {
        listOfDemoSongs.clear();
        System.out.println("[SERVER] - Demo songs added to List: ");
        for (DemoSong demoSong : listOfDemoSongsFromDb) {
            listOfDemoSongs.add(demoSong);
            System.out.println(demoSong);
        }
    }
}
