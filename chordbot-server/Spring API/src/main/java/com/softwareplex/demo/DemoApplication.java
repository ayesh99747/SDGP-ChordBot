package com.softwareplex.demo;

import com.softwareplex.demo.controller.DemoSongController;
import com.softwareplex.demo.controller.PlaylistSongController;
import com.softwareplex.demo.controller.UserLoginController;
import com.softwareplex.demo.model.DemoSong;
import com.softwareplex.demo.model.PlaylistSong;
import com.softwareplex.demo.model.User;
import com.softwareplex.demo.repositories.DemoSongRepository;
import com.softwareplex.demo.repositories.PlaylistSongRepository;
import com.softwareplex.demo.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    private final UserRepository userRepository;
    private final DemoSongRepository demoSongRepository;
    private final PlaylistSongRepository playlistSongRepository;

    public DemoApplication(UserRepository userRepository, DemoSongRepository demoSongRepository, PlaylistSongRepository playlistSongRepository) {
        this.userRepository = userRepository;
        this.demoSongRepository = demoSongRepository;
        this.playlistSongRepository = playlistSongRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        //Users are read from the database and inserted to the list
        System.out.println();
        System.out.println("Users retrieved from db.");
        List<User> listOfUsersFromDb = userRepository.findAll();
        UserLoginController.addUsersFromDatabase(listOfUsersFromDb);

        //Demo songs are read from the database and inserted to the list
        System.out.println();
        System.out.println("Demo songs retrieved from db.");
        List<DemoSong> listOfDemoSongsFromDb = demoSongRepository.findAll();
        DemoSongController.addDemoSongsFromDatabase(listOfDemoSongsFromDb);

        //Playlist songs are read from the database and inserted to the list
        System.out.println();
        System.out.println("Playlist songs retrieved from db.");
        List<PlaylistSong> listOfPlaylistSongsFromDb = playlistSongRepository.findAll();
        PlaylistSongController.addPlaylistSongsFromDatabase(listOfPlaylistSongsFromDb);

        System.out.println();
        System.out.println("[SERVER] - Server is ready... ");
    }

}
