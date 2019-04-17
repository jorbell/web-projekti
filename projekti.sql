DROP DATABASE projekti;
CREATE DATABASE projekti;
USE projekti;
CREATE TABLE Product(
    ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(30),
    Category varchar(30),
    Price decimal(6,2),
    Brand varchar(30),
    Description varchar(2000),
    ImagePath varchar(30)
);
CREATE TABLE Category(
    ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(30)
);
