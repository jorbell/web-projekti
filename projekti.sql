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
CREATE TABLE orders(
    order_ID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_ID integer NOT NULL(3),
    ordered_items varchar(999),
    price integer(6),
    order_date datetime
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
INSERT into categories (category_name)
            values ("Sales");		    

INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("ZenBook 13 UX331UA", "2", 499.99, "Asus", "Kevyt ja kompakti Asus ZenBook 13 -kannettava hurmaa ajattomalla tyylikkyydellaan ja sujuvalla toiminnallaan.", "img/ux331ua.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("T580", "2", 649.99, "Lenovo", "Lenovo T580 with 8gen i7 and Nvidia GPU", "img/t580.jpg");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("TK310", "4", 56.99, "AKG", "AKG Headphones", "img/t580.jpg");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("ASDF", "4", 36.99, "Sennheiser", "Sennheiser Headphones", "img/t580.jpg");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("GeForce GTX 2080", "3", 896.99, "Nvidia", "Koe realistisempi pelikokemus EVGA GeForce RTX 2080 XC -naytonohjaimella.", "img/2080.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Ideapad 330s", "2", 399.99, "Lenovo", "14-tuumaisessa Lenovo Ideapad 330s -kannettavassa on tyylikas alumiininen muotoilu.", "img/330s.webp");			
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("VivoBook 14", "2", 449.99, "Asus", "Asus VivoBook 14 -kannettavassa on tyylikas lahes kehykseton naytto. ", "img/vivobook-14.webp");			
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("L406 14", "2", 249.99, "Asus", "Elegantti 14-tuumainen Asus L406 -kannettava tarjoaa pitkan akunkeston ja luotettavan suorituskyvyn paivittaiseen kayttoon.", "img/l406.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Chromebook C523", "2", 299.99, "Asus", "Kestavassa Asus Chromebook C523 15,6 tuuman kannettavassa on miellyttavan tuntuinen alumiininen kansi.", "img/c523.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("VivoBook Flip", "2", 599.99, "Asus", "Asus VivoBook Flip 14 2-in-1 -laite muuntautuu kannettavasta tietokoneesta tabletiksi kaden kaanteessa.", "img/tp412ua.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("15-cx0812no ", "2", 899.99, "HP", "Tehokas HP Pavilion Gaming -pelikannettava sopii intohimoiseen pelaamiseen.", "img/cx0812no.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("15-da0803no", "2", 549.99, "HP", "Tehokas ja monipuolinen HP 15-da0803no -kannettava on varustettu nopealla 8. sukupolven Intel Core i5 -prosessorilla ja sukkelalla SSD-tallennuksella.", "img/da0803no.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("AirPods 2019", "4", 179.99, "Apple", "Taysin langattomat ja erittain kompaktit Apple AirPods -kuulokkeet tunnistavat, kun laitat ne korviisi.", "img/airpods.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("E45BT", "4", 86.99, "JBL", "JBL E45BT tuottaa JBL-kuulokkeille ominaisen, korkealaatuisen aanen.", "img/e45bt.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("WH-1000XM3", "4", 326.99, "Sony", "Edeltajaansa paremmat langattomat Sony WH-1000XM3 -around-ear-kuulokkeet ovat ohuet, kevyet ja pitavat taustamelun pois korvistasi tehokkaasti.", "img/wh-1000xm3.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Mid", "4", 76.99, "Marshall", "Langattomat Marshall Mid -on-ear-kuulokkeet on suunniteltu korkealaatuiseen ja miellyttavaan musiikin kuunteluun.", "img/marshall.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Tune500BT", "4", 59.99, "JBL", "Langattomat JBL Tune500BT on-ear -kuulokkeet ovat erinomaiset kaikille musiikin ystaville.", "img/tune500bt.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Tolv", "4", 116.99, "Studio", "Vapaudu johdoista Sudio Tolv -taysin langattomien in-ear kuulokkeiden avulla.", "img/tolv.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Studio3", "4", 235.99, "Beats", "Langattomilla Beats Studio3 -around-ear-kuulokkeilla voit nauttia kristallinkirkkaasta aanentoistosta meluisassakin ymparistossa.", "img/studio3.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("PortaPro", "4", 76.99, "Koss", "Kossin legendaariset PortaPro-kuulokkeet tekevat paluun langattomassa muodossa.", "img/koss.webp");	
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Ryzen 5 2600", "3", 176.99, "AMD", "Toisen sukupolven AMD Ryzen 5 2600 -kuusiydinprosessori antaa parannetun taajuusalueen ja 12-saikeisen suorituksen tehokkaille tyo- ja pelitietokoneille.", "img/2600.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("i9-9900K", "3", 496.99, "Intel", "Tehosta pelitietokoneen suorituskykya 9. sukupolven Intel Core i9-9900K -kahdeksanydinprosessorilla, jossa on 5 GHz turbotila ja 16 saietta vaativienkin ohjelmien moniajoon.", "img/i9-9900k.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("i5-9600K", "3", 296.99, "Intel", "Tehosta pelitietokoneen suorituskykya 9. sukupolven Intel Core i5-9600K -kuusiydinprosessorilla, jossa on 4,6 GHz turbotila ja 6 saietta ohjelmien moniajoon. ", "img/i5-9600k.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("i3-8350K", "3", 196.99, "Intel", "Tehosta pelitietokoneen suorituskykya Coffee Lake -arkkitehtuurilla varustetulla, edistyneella Intel Core i3-8350K -neliydinprosessorilla. ", "img/i3-8350k.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("GeForce RTX 2060 OC ", "3", 396.99, "Nvidia", "Ylikellotettu Gigabyte GeForce RTX 2060 OC -naytonohjain takaa mahtavan pelikokemuksen.", "img/2060.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("GeForce RTX 2070 OC", "3", 546.99, "Nvidia", "Gigabyte GeForce RTX 2070 WindForce -naytonohjain tekee pelikokemuksesta aivan erityisen.", "img/2070.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Ripjaws V", "3", 96.99, "G.Skill", "G.Skill Ripjaws V DDR4 -keskusmuisti tuo lisaa suorituskykya pelitietokoneeseesi.", "img/ripjaws.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Vengeance", "3", 106.99, "Corsair", "With Corsair Vengeance DDR4 RAM, you can boost the performance of your gaming PC.", "img/vengeance.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Focus G", "3", 96.99, "Fractal Design", "Fractal Design Focus G ATX PC case lets you create a powerful gaming PC with clean layout and modern design.", "img/focusg.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("A400 480GB", "3", 66.99, "Kingston", "Lyhenna tietokoneesi lataus- ja kaynnistysaikoja 7 mm korkean sisaisen Kingston A400 -SSD-muistin avulla. ", "img/a400.webp");            
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("AWE6100", "1", 394.99, "Whirlpool", "Paalta taytettavassa Whirlpool-pyykinpesukoneessa on 6 kg tayttomaara, 15 minuutin pikaohjelma ja helppokayttoiset toiminnot. ", "img/awe6100.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("FH4G7TDN1", "1", 296.99, "LG", "LG pyykinpesukone monipuolisilla pesuohjelmilla, selkealla LED-naytolla ja 8 kg tayttomaaralla.", "img/fh4g7tdn1.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Serie 6", "1", 346.99, "Bosch", "Edesta taytettava Bosch Serie 6 pyykinpesukone, jossa on VarioPerfect-toiminto, 8 kg tayttomaara ja hellavarainen varioDrum -rumpu.", "img/serie-6.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("iQ100", "1", 296.99, "Siemens", "Helppokayttoinen Siemens astianpesukone 12 hengen astiastolle. Koneessa on VarioSpeed-ominaisuus ja kaytannollinen VarioFlex-korijarjestelma.", "img/iq100.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("CDP 2D947W-86", "1", 346.99, "Candy", "Candy astianpesukone on erinomainen ratkaisu pienempiin talouksiin.", "img/candy.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("Series 4", "1", 546.99, "Bosch", "Laadukas Bosch Series 4 -astianpesukone, jossa hyva kayttotilavuus, Zeolith-kuivaus ja VarioSpeed Plus -ominaisuus, jonka avulla saat taydellisen puhtaat astiat lyhyemmassa ajassa.", "img/series-4.webp");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("PBH 2100 RE", "5", 96.99, "Bosch", "Vaivaton vasaraporaus betoniin ja tiiliseinaan, piikkaus, poraus ja ruuvaus voimakkaalla 550 W:n teholla.", "img/boschdrill.jpeg");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("5-OS", "5", 16.99, "RUUVIMEISSELISARJA", "Ruuvimeisselin kumipintainen kahva antaa loistavan pidon.", "img/ruuvari.jpeg");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("FATMAX ANTIVIBE 16 OZ", "5", 36.99, "Stanley", "Rekyyliton vasara hyvalla kadensijalla ja isolla lyontipinnalla.", "img/vasara.jpeg");
INSERT into products (product_name, product_CategoryID, product_Price, product_Brand, product_Description, product_ImagePath)
            values ("DWD024KS-QS 650 W", "5", 136.99, "DeWalt", "Kevytta konetta on helppo kayttaa ja keveys vahentaa kayttajan vasymista. ", "img/dewalt.jpeg");
	
