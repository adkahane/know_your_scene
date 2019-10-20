CREATE DATABASE IF NOT EXISTS scene_db;
USE scene_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS concert_lineup;
DROP TABLE IF EXISTS concert;
DROP TABLE IF EXISTS song;
DROP TABLE IF EXISTS band;

-- Create the band table
CREATE TABLE band (
    band_id int NOT NULL AUTO_INCREMENT,
    band_name varchar (255) NOT NULL,
    band_state varchar (2) NOT NULL,
    band_city varchar (25) NOT NULL,
    year_started year,
    year_ended year,
    PRIMARY KEY (band_id)
);

-- Create the songs table
CREATE TABLE song (
  song_id int NOT NULL AUTO_INCREMENT,
  song_name varchar (255) NOT NULL,
  album varchar (255),
  released year,
  _band_id int,
  PRIMARY KEY (song_id),
  FOREIGN KEY (_band_id) REFERENCES band (band_id)
);

-- Create concerts table
CREATE TABLE concert (
  concert_id int NOT NULL AUTO_INCREMENT,
  concert_date date NOT NULL,
  concert_venue varchar (40),
  concert_city varchar (30),
  concert_state varchar (2),
  PRIMARY KEY (concert_id)
);

-- Create concert_lineup table to bridge band and concert tables
CREATE TABLE concert_lineup (
  _concert_id int,
  _band_id int,
  FOREIGN KEY (_concert_id) REFERENCES concert (concert_id),
  FOREIGN KEY (_band_id) REFERENCES band (band_id)
);