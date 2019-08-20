Create DATABASE wiiShare_db;
USE wiiShare_db;

CREATE TABLE wiiShare
(
    id INT NOT NULL AUTO_INCREMENT,
    wiiShare_name VARCHAR (50) NOT NULL,
    Address1 VARCHAR (120),
    City VARCHAR (100) NOT NULL,
    States CHAR (2) NOT NULL,
    Country CHAR (2) NOT NULL,
    PostalCode VARCHAR (16) NOT NULL,
    Product BOOLEAN DEFAULT false,
    HasAccount BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)

);