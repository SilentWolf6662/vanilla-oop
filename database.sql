-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for silentprojectdatabase
CREATE DATABASE IF NOT EXISTS `silentprojectdatabase` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `silentprojectdatabase`;

-- Dumping structure for table silentprojectdatabase.contact
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `discord` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.contact: ~0 rows (approximately)

-- Dumping structure for table silentprojectdatabase.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `navText` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `imageSrc` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `repositoryLink` varchar(255) DEFAULT NULL,
  `liveLink` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.projects: ~0 rows (approximately)

-- Dumping structure for table silentprojectdatabase.projecttechnologies
CREATE TABLE IF NOT EXISTS `projecttechnologies` (
  `projectId` int(11) NOT NULL,
  `technologyId` int(11) NOT NULL,
  PRIMARY KEY (`projectId`,`technologyId`),
  KEY `technologyId` (`technologyId`),
  CONSTRAINT `projecttechnologies_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`),
  CONSTRAINT `projecttechnologies_ibfk_2` FOREIGN KEY (`technologyId`) REFERENCES `technologies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.projecttechnologies: ~0 rows (approximately)

-- Dumping structure for table silentprojectdatabase.technologies
CREATE TABLE IF NOT EXISTS `technologies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.technologies: ~168 rows (approximately)
INSERT INTO `technologies` (`id`, `name`) VALUES
	(1, 'SCSS'),
	(2, 'TypeScript'),
	(3, 'Tailwind CSS'),
	(4, 'Bootstrap'),
	(5, 'Material-UI'),
	(6, 'Chakra UI'),
	(7, 'Shadcn/ui'),
	(8, 'Ant Design'),
	(9, 'Styled Components'),
	(10, 'Emotion'),
	(11, 'Framer Motion'),
	(12, 'bcrypt'),
	(13, 'Contentful'),
	(14, 'Sanity'),
	(15, 'Strapi'),
	(16, 'GraphQL CMS'),
	(17, 'WordPress'),
	(18, 'Shopify'),
	(19, 'Magento'),
	(20, 'WooCommerce'),
	(21, 'BigCommerce'),
	(22, 'Squarespace'),
	(23, 'Wix'),
	(24, 'Webflow'),
	(25, 'Gatsby'),
	(26, 'Prisma'),
	(27, 'Next.js'),
	(28, 'Vite'),
	(29, 'HTML'),
	(30, 'CSS'),
	(31, 'JavaScript'),
	(32, 'React'),
	(33, 'Redux'),
	(34, 'Node'),
	(35, 'Express'),
	(36, 'MongoDB'),
	(37, 'Mongoose'),
	(38, 'Jest'),
	(39, 'Testing Library'),
	(40, 'Cypress'),
	(41, 'Webpack'),
	(42, 'Babel'),
	(43, 'ESLint'),
	(44, 'Prettier'),
	(45, 'Git'),
	(46, 'GitHub'),
	(47, 'GitLab'),
	(48, 'Bitbucket'),
	(49, 'Docker'),
	(50, 'Kubernetes'),
	(51, 'AWS'),
	(52, 'Azure'),
	(53, 'GCP'),
	(54, 'Heroku'),
	(55, 'Netlify'),
	(56, 'Vercel'),
	(57, 'Firebase'),
	(58, 'SQL'),
	(59, 'MySQL'),
	(60, 'PostgreSQL'),
	(61, 'SQLite'),
	(62, 'NoSQL'),
	(63, 'Redis'),
	(64, 'GraphQL'),
	(65, 'Apollo'),
	(66, 'REST'),
	(67, 'OAuth'),
	(68, 'JWT'),
	(69, 'WebSockets'),
	(70, 'WebRTC'),
	(71, 'Electron'),
	(72, 'Flutter'),
	(73, 'Dart'),
	(74, 'Python'),
	(75, 'Django'),
	(76, 'Flask'),
	(77, 'Ruby'),
	(78, 'Rails'),
	(79, 'Java'),
	(80, 'Spring'),
	(81, 'Kotlin'),
	(82, 'Scala'),
	(83, 'Clojure'),
	(84, 'Groovy'),
	(85, 'PHP'),
	(86, 'Laravel'),
	(87, 'Symfony'),
	(88, 'C#'),
	(89, '.NET'),
	(90, 'Unity'),
	(91, 'Unreal'),
	(92, 'C++'),
	(93, 'Rust'),
	(94, 'Go'),
	(95, 'Swift'),
	(96, 'Objective-C'),
	(97, 'C'),
	(98, 'R'),
	(99, 'MATLAB'),
	(100, 'Octave'),
	(101, 'Julia'),
	(102, 'Haskell'),
	(103, 'Erlang'),
	(104, 'Elixir'),
	(105, 'F#'),
	(106, 'Assembly'),
	(107, 'Shell'),
	(108, 'PowerShell'),
	(109, 'Makefile'),
	(110, 'Dockerfile'),
	(111, 'YAML'),
	(112, 'JSON'),
	(113, 'XML'),
	(114, 'Markdown'),
	(115, 'CSV'),
	(116, 'TOML'),
	(117, 'INI'),
	(118, 'GraphQL Schema'),
	(119, 'OpenAPI'),
	(120, 'Swagger'),
	(121, 'Protobuf'),
	(122, 'Avro'),
	(123, 'Thrift'),
	(124, 'Apache Kafka'),
	(125, 'RabbitMQ'),
	(126, 'Apache MQ'),
	(127, 'Redis MQ'),
	(128, 'ActiveMQ'),
	(129, 'ZeroMQ'),
	(130, 'NATS'),
	(131, 'MQTT'),
	(132, 'AMQP'),
	(133, 'STOMP'),
	(134, 'WebSockets Protocol'),
	(135, 'WebRTC Protocol'),
	(136, 'HTTP'),
	(137, 'HTTPS'),
	(138, 'HTTP/2'),
	(139, 'HTTP/3'),
	(140, 'TCP'),
	(141, 'UDP'),
	(142, 'IP'),
	(143, 'DNS'),
	(144, 'DHCP'),
	(145, 'FTP'),
	(146, 'SFTP'),
	(147, 'SCP'),
	(148, 'SSH'),
	(149, 'Telnet'),
	(150, 'SMTP'),
	(151, 'POP'),
	(152, 'IMAP'),
	(153, 'HTTP Status Codes'),
	(154, 'HTTP Methods'),
	(155, 'HTTP Headers'),
	(156, 'HTTP Cookies'),
	(157, 'HTTP Cache'),
	(158, 'HTTP Compression'),
	(159, 'HTTP Security'),
	(160, 'HTTP Authentication'),
	(161, 'HTTP Authorization'),
	(162, 'HTTP Session'),
	(163, 'HTTP Redirects'),
	(164, 'HTTP Proxies'),
	(165, 'HTTP CORS'),
	(166, 'HTTP Preflight'),
	(167, 'HTTP Caching'),
	(168, 'More...');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
