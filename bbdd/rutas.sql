CREATE DATABASE  IF NOT EXISTS `rutas_motos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rutas_motos`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rutas_motos
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mapas`
--

DROP TABLE IF EXISTS `mapas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mapas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dist` decimal(10,0) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dif` enum('facil','dificil','media') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `latini` float NOT NULL,
  `longini` float NOT NULL,
  `latfin` float NOT NULL,
  `longfin` float NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapas`
--

LOCK TABLES `mapas` WRITE;
/*!40000 ALTER TABLE `mapas` DISABLE KEYS */;
INSERT INTO `mapas` VALUES (1,'Cebreros','Salida de quijorna, pasando cruz verde, terminando en cebreros.',68,'https://upload.wikimedia.org/wikipedia/commons/e/e3/Cebreros%2C_vista_parcial_%2843665523784%29.jpg','dificil',40.4398,-4.05659,40.468,-4.46652,NULL),(4,'Atazar','Salida de San Agustín de Guadalix, pasando Torrelaguna, terminando en Atazar.',46,'https://www.sierranortemadrid.org/wp-content/uploads/2016/03/pueblo-el-atazar-01.jpg','media',40.6933,-3.61616,40.9433,-3.47128,NULL),(5,'Guadarrama','Salida en Soto del real, pasando por cercedilla y terminando en guadarrama',40,'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/87/88/13/872014405.jpg','media',40.7585,-3.78385,40.6784,-4.08769,NULL),(7,'Arenas de San Pedro','Salida en San Martín de Valdeiglesias, pasando por Burgohondo y terminando en Arenas de San pedro',103,'http://4.bp.blogspot.com/-L2dgk9sysxA/UlVIlo8asII/AAAAAAAAFbg/qjJ72LfTEsA/s1600/Arenas02.jpg','facil',40.3731,-4.40228,40.2186,-5.08481,NULL),(9,'Chorreras de cabriel','Salida desde Cuenca, pasando por Carboneras y terminando en las chorreras de Cabriel.',78,'https://www.chorrerasdelcabriel.es/assets/img/inicio/fondo-portada.jpg','dificil',40.0834,-2.14052,39.7169,-1.61554,NULL),(10,'Hoces del Duratón','Salida desde Segovia, pasando por Pedraza y terminando en las Hoces del río Duratón.',72,'https://img.bekiaviajes.com/articulos/portada/89000/89547-h.jpg','facil',40.9596,-4.11161,41.3422,-3.86992,NULL),(11,'Guadalupe','Salida desde Toledo, pasando por la nava de Ricomalillo y terminando en Guadalupe.',173,'https://saposyprincesas.elmundo.es/wp-content/uploads/2019/08/a_guadalupe_01.jpg','dificil',39.8725,-4.0277,39.4541,-5.32702,NULL),(23,'3','3',3,'3','dificil',3,3,3,3,3);
/*!40000 ALTER TABLE `mapas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseñas`
--

DROP TABLE IF EXISTS `reseñas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseñas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tittle` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `coment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `val` enum('1','2','3','4','5') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseñas`
--

LOCK TABLES `reseñas` WRITE;
/*!40000 ALTER TABLE `reseñas` DISABLE KEYS */;
INSERT INTO `reseñas` VALUES (1,'Divertida y bonita','Una ruta cerca de Madrid, con buenas curvas para aprender y disfrutar y rodeado de paisajes de la cercana sierra de gredos.','4');
/*!40000 ALTER TABLE `reseñas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nickname_UNIQUE` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'Carlos Roldá,','rol14','Madrid','$2a$12$HfQ/IMYIoOyAXEl73DWO0.6DJA//Vl1IpsLsdo12rVd7X0lhRK2IO','eiiiiiiiii','carlos_roldan92@hotmail.com',30,'');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-18 13:01:49
