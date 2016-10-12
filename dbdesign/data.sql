-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sgdb
-- ------------------------------------------------------
-- Server version	5.7.15-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `chapter`
--

LOCK TABLES `chapter` WRITE;
/*!40000 ALTER TABLE `chapter` DISABLE KEYS */;
INSERT INTO `chapter` VALUES (1,'Chapter 1',1,'1h 3m',1),(2,'Chapter 3',3,'10h 3m',1),(3,'Chapter 2',2,'10h 3m',1),(4,'Chapter 5',5,'10h 3m',1),(5,'Chapter 4',4,'10h 3m',1);
/*!40000 ALTER TABLE `chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Angular 2: First Look','This course is a gentle introduction to the changes that Angular 2 brings, how they compare to Angular 1, and provides an understanding of the architecture and how the core concepts work together to build applications.','<p><strong>Angular2 is released! This is a WATCH,UNDERSTAND and IMPLEMENT course.</strong><p>\n\n<p>Learn and create a comprehensive project with the most popular JavaScript Framework.</p>\n\n<p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n<p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.</p>\n\n<p>Throughout the course, students will be creating a fully comprehensive project. Most of the topics coming with Angular2 is used in the project. Just watch,understand and implement.</p>\n\n<h6><strong>What are the requirements?</strong></h6>\n<p>Just install Node Package Manager and Visual Studio. You are ready to go on this course!</p>\n<h6><strong>What am I going to get from this course?</strong></h6>\n<p>After completing the project students will learn how to use Angular2 in a real project</p>\n<h6><strong>What is the target audience?</strong></h6>\n<p>This course is for beginner and intermediate Angular2 students.</p>','Beginner','2016-10-10',500,20,1,'test',NULL,'main exam',1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lesson`
--

LOCK TABLES `lesson` WRITE;
/*!40000 ALTER TABLE `lesson` DISABLE KEYS */;
INSERT INTO `lesson` VALUES (1,'Lesson 1 1',1,'1m 1s',1,'l1','Video',1),(2,'Lesson 1 2',1,'1m 1s',2,'l1','Video',1),(3,'Lesson 1 3',1,'1m 1s',3,'l1','Video',1),(4,'Lesson 1 4',1,'1m 1s',4,'l1','Video',1),(5,'Lesson 1 5',1,'1m 1s',5,'l1','Video',1),(6,'Lesson 3 1',1,'1m 1s',1,'l3','Video',2),(7,'Lesson 3 2',1,'1m 1s',2,'l3','Video',2),(8,'Lesson 3 3',1,'1m 1s',3,'l3','Video',2),(9,'Lesson 3 4',1,'1m 1s',4,'l3','Video',2),(10,'Lesson 2 4',1,'1m 1s',4,'l2','Video',3),(11,'Lesson 2 3',1,'1m 1s',3,'l2','Video',3),(12,'Lesson 2 2',1,'1m 1s',2,'l2','Video',3),(13,'Lesson 2 1',1,'1m 1s',1,'l2','Video',3),(14,'Lesson 5 1',0,'1m 1s',1,'l5','Video',4),(15,'Lesson 5 2',0,'1m 1s',2,'l5','Video',4),(16,'Lesson 5 4',0,'1m 1s',4,'l5','Video',4),(17,'Lesson 5 3',0,'1m 1s',3,'l5','Video',4),(18,'Lesson 4 1',0,'1m 1s',1,'l4','Video',5),(19,'Lesson 4 2',0,'1m 1s',2,'l4','Video',5),(20,'Lesson 4 4',0,'1m 1s',4,'l4','Video',5),(21,'Lesson 4 3',0,'1m 1s',3,'l4','Video',5);
/*!40000 ALTER TABLE `lesson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Amrulla','Khan','pamrulla@gmail.com','asf','image1','a','a','a',1,'author','0016-10-10');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_course`
--

LOCK TABLES `user_course` WRITE;
/*!40000 ALTER TABLE `user_course` DISABLE KEYS */;
INSERT INTO `user_course` VALUES (1,0,0,1,1);
/*!40000 ALTER TABLE `user_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_lesson`
--

LOCK TABLES `user_lesson` WRITE;
/*!40000 ALTER TABLE `user_lesson` DISABLE KEYS */;
INSERT INTO `user_lesson` VALUES (1,1,1,2),(2,1,1,1),(3,0,1,3);
/*!40000 ALTER TABLE `user_lesson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-12 22:00:53
