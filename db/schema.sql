CREATE DATABASE IF NOT EXISTS scene_db;
USE scene_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS band;

-- Create the burgers table
CREATE TABLE band (
    id int NOT NULL AUTO_INCREMENT,
    band_name varchar(255) NOT NULL,
    us_state varchar (20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE songs (
  id int NOT NULL AUTO_INCREMENT,
  song_name varchar (255) NOT NULL,
  band_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (band_id) REFERENCES band(id)
);