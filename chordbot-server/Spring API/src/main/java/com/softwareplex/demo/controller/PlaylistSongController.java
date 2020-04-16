package com.softwareplex.demo.controller;

import com.softwareplex.demo.model.DemoSong;
import com.softwareplex.demo.model.PlaylistSong;

import java.util.ArrayList;
import java.util.List;

public class PlaylistSongController {
    private static List<PlaylistSong> listOfPlaylistSongs = new ArrayList<PlaylistSong>();

    public static List<PlaylistSong> getListOfPlaylistSongs() {
        return listOfPlaylistSongs;
    }

    public static void addPlaylistSongsFromDatabase(List<PlaylistSong> listOfPlaylistSongsSongsFromDb) {
        listOfPlaylistSongs.clear();
        System.out.println("[SERVER] - Playlist songs added to List: ");
        for (PlaylistSong playlistSong : listOfPlaylistSongsSongsFromDb) {
            listOfPlaylistSongs.add(playlistSong);
            System.out.println(playlistSong);
        }
    }
}
