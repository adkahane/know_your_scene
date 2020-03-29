-- Seed Bands
INSERT INTO band (band_id, band_name, band_state, band_city, year_started, year_ended) VALUES (1, "Metacognition", "NJ", "Linwood", 2001, 2005);
INSERT INTO band (band_id, band_name, band_state, band_city, year_started, year_ended) VALUES (2, "Dead Limbs", "NJ", "New Brunswick", 2010, 2010);

-- Seed Songs
INSERT INTO song (song_name, album, released, _band_id) VALUES ("Schizophrenia", "Demo", "2010", 2);
INSERT INTO song (song_name, released, _band_id) VALUES ("Pancho's house band on Margarita night", "2003", 1);
INSERT INTO song (song_name, album, released, _band_id) VALUES ("Shit Got Serious", "Demo", "2010", 2);
INSERT INTO song (song_name, album, released, _band_id) VALUES ("Ain't no Sunshine When it Rains", "Demo", "2010", 2);
INSERT INTO song (song_name, album, released, _band_id) VALUES ("Do The Right Thing", "Demo", "2010", 2);
INSERT INTO song (song_name, released, _band_id) VALUES ("If You Keep Yourself Ignorant You'll Think You're a Genius", "2003", 1);
INSERT INTO song (song_name, released, _band_id) VALUES ("Bloodsong", "2003", 1);
INSERT INTO song (song_name, released, _band_id) VALUES ("Story Told by Shattered Bones", "2003", 1);
INSERT INTO song (song_name, released, _band_id) VALUES ("Everyday Eyes", "2003", 1);
INSERT INTO song (song_name, released, _band_id) VALUES ("Heliophobia", "2003", 1);
INSERT INTO song (song_name, released, _band_id) VALUES ("Shards of Frailty", "2003", 1);
INSERT INTO song (song_name, released, _band_id) VALUES ("Effortless", "2003", 1);

-- Seed concerts
INSERT INTO concert (concert_date, concert_venue, concert_city, concert_state) VALUES ("2010-01-03", "Court Tavern", "New Brunswick", "NJ");
INSERT INTO concert (concert_date, concert_venue, concert_city, concert_state) VALUES ("2004-02-01", "Veterans Hall", "Cape May Court House", "NJ");

-- Seed concert_lineup
INSERT INTO concert_lineup (_concert_id, _band_id) VALUES (1, 2);
INSERT INTO concert_lineup (_concert_id, _band_id) VALUES (2, 1);

-- Queries

-- Show bands and their songs
select band_name, song_name FROM band INNER JOIN song ON band.band_id = song._band_id;

-- Show Concerts and their bands
select concert_venue, concert_date, concert_city, concert_state, band_name FROM concert 
INNER JOIN concert_lineup ON 
	concert.concert_id = concert_lineup._concert_id 
JOIN band ON 
	band.band_id = concert_lineup._band_id;