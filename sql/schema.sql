CREATE DATABASE IF NOT EXISTS scene_db;

USE scene_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS concert_lineup;
DROP TABLE IF EXISTS concert;
DROP TABLE IF EXISTS band;

-- Create the band table
CREATE TABLE band (
    band_id INT UNIQUE NOT NULL AUTO_INCREMENT,
    band_name VARCHAR(255) NOT NULL,
    genre VARCHAR(40) NOT NULL,
    band_state VARCHAR(2) NOT NULL,
    band_city VARCHAR(25) NOT NULL,
    year_started YEAR,
    year_ended YEAR,
    PRIMARY KEY (band_id)
);

-- Create concerts table
CREATE TABLE concert (
    concert_id INT UNIQUE NOT NULL AUTO_INCREMENT,
    concert_date DATE NOT NULL,
    concert_venue VARCHAR(40),
    concert_city VARCHAR(30) NOT NULL,
    concert_state VARCHAR(2) NOT NULL,
    genre VARCHAR(40) NOT NULL,
    flyer VARCHAR(255),
    PRIMARY KEY (concert_id)
);

-- Create concert_lineup table to bridge band and concert tables
CREATE TABLE concert_lineup (
    _concert_id INT NOT NULL,
    _band_id INT NOT NULL,
    FOREIGN KEY (_concert_id) REFERENCES concert(concert_id),
    FOREIGN KEY (_band_id) REFERENCES band(band_id),
    PRIMARY KEY (_concert_id, _band_id)
);
