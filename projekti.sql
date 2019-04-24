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

CREATE TABLE Client(
    ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(30),
    Surname varchar(30),
    Email varchar(80),
    Client_Products_ID integer,

);

INSERT into Category (Name)
            values ("Electronics");
INSERT into Category (Name)
            values ("Laptops");
INSERT into Category (Name)
            values ("Components");
INSERT into Category (Name)
            values ("Audio");
INSERT into Category (Name)
            values ("Tools");

INSERT into Product (Name, Category, Price, Brand, Description, ImagePath)
            values ("T480", "Laptops", 399.99, "Lenovo", "Lenovo T480 with intel I7", "img/lenovoT80");
INSERT into Product (Name, Category, Price, Brand, Description, ImagePath)
            values ("UR8860", "Laptops", 649.99, "ASUS", "ASUS UR8860 laptop with Nvidia Graphics", "img/ASUSUR8860");
INSERT into Product (Name, Category, Price, Brand, Description, ImagePath)
            values ("TK310", "Audio", 56.99, "AKG", "AKG Headphones", "img/TK310");
INSERT into Product (Name, Category, Price, Brand, Description, ImagePath)
            values ("ASDF", "Audio", 36.99, "Sennheiser", "Sennheiser Headphones", "img/ASDF");

