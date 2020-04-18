package com.softwareplex.demo.repositories;

import com.softwareplex.demo.model.DemoSong;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * This class is the customer repository interface
 *
 * @author Ayeshmantha Wijayagunathilaka (ID: 2018072)
 */

@Repository
public interface DemoSongRepository extends MongoRepository<DemoSong, String> {
}
