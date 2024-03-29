CREATE DATABASE IF NOT EXISTS ESHOP;
USE ESHOP;
CREATE TABLE IF NOT EXISTS Products(
	IdProduct INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Price FLOAT NOT NULL,
    Img VARCHAR(255) NOT NULL,
    Departament VARCHAR(120) NOT NULL,
    Class VARCHAR(120) NOT NULL,
    SubClass VARCHAR(120) NOT NULL
)

INSERT INTO Products  VALUES (1, 'LECHE GLORIA 1LT', 3.40, 'LECHE_GLORIA.JPG', 'LACTEOS', 'LECHE', 'LECHE EVAPORADA');
INSERT INTO Products  VALUES (2, 'YOGURT GLORIA 1LT', 4.50, 'YOGURT_GLORIA_1LT.JPG', 'LACTEOS', 'YOGURT', 'YOGURT');
INSERT INTO Products  VALUES (3, 'YOGURT GLORIA 5LT', 10.90, 'YOGURT_GLORIA_5LT.JPG', 'LACTEOS', 'YOGURT', 'YOGURT');
INSERT INTO Products  VALUES (4, 'LECHE ENTERA GLORIA UHT', 3.90, 'LECHE_UHT_GLORIA_5LT.JPG', 'LACTEOS', 'LECHE', 'LECHE ENTERA');
INSERT INTO Products  VALUES (5, 'ATUN CAMPOMAR', 3.50, 'ATUN_CAMPOMAR.JPG', 'ABARROTES', 'CONSERVAS', 'CONSERVA DE PESCADO');
INSERT INTO Products  VALUES (6, 'ARROZ COSTEÑO 1 Kg', 4.20, 'ARROZ_COSTEÑO.JPG', 'ABARROTES', 'GRANOS', 'GRANOS');
INSERT INTO Products  VALUES (7, 'FIDEOS MOLITALIA', 2.20, 'FIDEOS_MOLITALIA.JPG', 'ABARROTES', 'PASTAS', 'PASTAS');
INSERT INTO Products  VALUES (8, 'NESCASFE 48gr', 10.50, 'CAFE_NESCAFE.JPG', 'ABARROTES', 'GRANOS', 'CAFE');
INSERT INTO Products  VALUES (9, 'AGUA MINERAL CIELO 1LT', 5.20, 'AGUA_MINERAL_CIELO.JPG', 'BEBIDAS NO ALCOHOLICAS', 'AGUAS', 'AGUA MINERAL');
INSERT INTO Products  VALUES (10, 'GASEOSA INKA KOLA 1LT', 3.50, 'GASEOSA_INKA_KOLA.JPG', 'BEBIDAS NO ALCOHOLICAS', 'GASEOSA', 'GASEOSA CON GAS');
INSERT INTO Products  VALUES (11, 'GASEOSA COCA COLA 1LT', 4.20, 'GASEOSA_COCA_COLA.JPG', 'BEBIDAS NO ALCOHOLICAS', 'GASEOSA', 'GASEOSA CON GAS');
INSERT INTO Products  VALUES (12, 'GASEOSA SPRITE 1LT', 3.50, 'GASEOSA_SPRITE.JPG', 'BEBIDAS NO ALCOHOLICAS', 'GASEOSA', 'GASEOSA CON GAS');