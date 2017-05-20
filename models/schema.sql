DROP DATABASE IF EXISTS tweeder_info;
CREATE DATABASE tweeder_info;

\c tweeder_info;


DROP TABLE IF EXISTS tweeds;

CREATE TABLE tweeds
(id SERIAL PRIMARY KEY,
  tweed VARCHAR(255)
);
