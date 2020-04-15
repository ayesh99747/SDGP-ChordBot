package com.softwareplex.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "PlaylistSongs")
public class PlaylistSong {
    @Id
    private String songId;  //This stores the song id

    @Field("songName")
    private String songName;//This is the name of the song
    @Field("imageName")
    private String imageName;//This is the name of the mp3 art
    @Field("artist")
    private String artist;    //This is the artist's name
    @Field("genre")
    private String genre;    //This is the genre of the song

    public PlaylistSong(String songName, String imageName, String artist, String genre) {
        this.songName = songName;
        this.imageName = imageName;
        this.artist = artist;
        this.genre = genre;
    }

    public String getSongId() {
        return songId;
    }

    public String getSongName() {
        return songName;
    }

    public String getImageName() {
        return imageName;
    }

    public String getArtist() {
        return artist;
    }

    public String getGenre() {
        return genre;
    }

    @Override
    public String toString() {
        return "PlaylistSong{" +
                "songId='" + songId + '\'' +
                ", songName='" + songName + '\'' +
                ", imageName='" + imageName + '\'' +
                ", artist='" + artist + '\'' +
                ", genre='" + genre + '\'' +
                '}';
    }
}



