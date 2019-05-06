DROP DATABASE projekti;
CREATE DATABASE projekti;
USE projekti;
CREATE TABLE products(
    product_ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_Name varchar(30),
    product_CategoryID integer,
    product_Price decimal(6,2),
    product_Brand varchar(30),
    product_Description varchar(2000),
    product_ImagePath varchar(30)
);
CREATE TABLE subcategories(
    subcategory_ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subcategory_Name varchar(30),
    subcategory_categoryID integer
);
CREATE TABLE categories(
    category_ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_Name varchar(30)
);

CREATE TABLE users(
    user_ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_Username varchar(30),
    user_Firstname varchar(30),
    user_Lastname varchar(30),
    user_Type varchar(80),
    user_Password varchar(80)
);

INSERT into categories (category_name)
            values ("Electronics");
INSERT into categories (category_name)
            values ("Laptops");
INSERT into categories (category_name)
            values ("Components");
INSERT into categories (category_name)
            values ("Audio");
INSERT into categories (category_name)
            values ("Tools");

INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("T480", "2", 399.99, "Lenovo", "Lenovo T480 with intel I7", "img/lenovoT80");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("UR8860", "2", 649.99, "ASUS", "ASUS UR8860 laptop with Nvidia Graphics", "img/ASUSUR8860");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("TK310", "4", 56.99, "AKG", "AKG Headphones", "img/TK310");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("ASDF", "4", 36.99, "Sennheiser", "Sennheiser Headphones", "img/ASDF");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("ASDF", "1", 36.99, "Siemens", "Washing Maschine", "img/ASDF");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Nvidia GTX 2080", "3", 896.99, "Nvidia", "Graphics Processing Unit", "img/ASDF");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Electric Drill", "5", 96.99, "Ryobi", "Electric Drill", "img/ASDF");
