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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.contact: ~0 rows (approximately)
INSERT INTO `contact` (`id`, `email`, `phone`, `github`, `linkedin`, `discord`) VALUES
	(1, 'mathiasdandersen@hotmail.dk', '+4524808246', 'SilentWolf6662', 'Mathias Draegert Mose Andersen', 'silentwolf_666');

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
  `technologies` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.projects: ~6 rows (approximately)
INSERT INTO `projects` (`id`, `navText`, `name`, `description`, `imageSrc`, `status`, `repositoryLink`, `liveLink`, `technologies`) VALUES
	(1, 'Vanilla OOP', 'Vanilla OOP Project', 'This is a simple project that I made to practice OOP in TypeScript. It\'s a simple website that displays a list of all my projects and their details.', './assets/img/VanillaOOP.png', 'In Progress', 'https://github.com/SilentWolf6662/vanilla-oop', '', 'TypeScript, SCSS, Vite'),
	(2, 'Dashboard', 'Dashboard Project', 'This is a complex dashboard project that I made as a personal game server management tool. It\'s a dashboard that etc. displays statistics and managing all users connected to the game server or registered onto the website.\n\n\n\n(Repository will stay private for now)', './assets/img/dashboard.png', 'In Progress', '', '', 'TypeScript, TailwindCSS, NextJS, shadcn/ui, NextAuth, Prisma, MySQL'),
	(3, 'Nightbird', 'Nightbird', 'This is a complex website for a fictional nightclub company that I made as a school project as a final project on basic course in web development. The project was a predefined project with optional technologies. It\'s a website that etc. displays the company\'s services, events, and more.\n\n\n\n(Completed to what was required)', './assets/img/nightbird.png', 'Completed', 'https://github.com/SilentWolf6662/nightbird', '', 'TypeScript, TailwindCSS, NextJS, MySQL, bcrypt, NextAuth, Contentful, And More...'),
	(4, 'Visualizer', 'Visualizer/Music Player', 'A little hobby project that I made to visualize the music playing. It was at first a little project to practice my skills in JavaScript, but it turned out to be a fun little project that I continued on it and made it to a music player and I am still using the music player to this day. It\'s a simple website that visualizes the music playing and allows you to control the music playing.\n\n(Repository will stay private for now)', './assets/img/visualizer.png', 'Completed', '', '', 'JavaScript, CSS, TailwindCSS, HTML, jQuery'),
	(5, 'Droemmesokker', 'Droemmesokker', 'This is a project that I made as a school project to practice my skills with javascript and tailwindcss. It\'s a website for a fictive company that sells socks. The website is a simple website that displays the company\'s products and allows you to buy them.\n\n\n\n(Completed to what was required)', './assets/img/drommesokker.png', 'Completed', 'https://github.com/SilentWolf6662/droemmesokker', '', 'JavaScript, TailwindCSS, HTML, CSS'),
	(6, 'Event Centrum', 'Event Centrum', 'This is a project that I made as a school project to practice the exam format of a project and TailwindCSS. It\'s a website for a fictive company that is a event agency. The website is a simple website that allows you to contact them.\n\n\n\n(Completed to what was required)', './assets/img/eventcentrum.png', 'In Progress', 'https://github.com/SilentWolf6662/EventCentrum', '', 'TypeScript, tailwindcss, NextJS');

-- Dumping structure for table silentprojectdatabase.projecttechnologies
CREATE TABLE IF NOT EXISTS `projecttechnologies` (
  `projectId` int(11) NOT NULL,
  `technologyId` int(11) NOT NULL,
  PRIMARY KEY (`projectId`,`technologyId`),
  KEY `technologyId` (`technologyId`),
  CONSTRAINT `projecttechnologies_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`),
  CONSTRAINT `projecttechnologies_ibfk_2` FOREIGN KEY (`technologyId`) REFERENCES `technologies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table silentprojectdatabase.projecttechnologies: ~29 rows (approximately)
INSERT INTO `projecttechnologies` (`projectId`, `technologyId`) VALUES
	(1, 1),
	(1, 2),
	(1, 28),
	(2, 2),
	(2, 3),
	(2, 7),
	(2, 12),
	(2, 27),
	(2, 59),
	(2, 169),
	(3, 2),
	(3, 3),
	(3, 12),
	(3, 13),
	(3, 27),
	(3, 59),
	(3, 168),
	(3, 169),
	(4, 3),
	(4, 29),
	(4, 30),
	(4, 31),
	(5, 3),
	(5, 29),
	(5, 30),
	(5, 31),
	(6, 2),
	(6, 3),
	(6, 27);

-- Dumping structure for table silentprojectdatabase.technologies
CREATE TABLE IF NOT EXISTS `technologies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
	(168, 'More...'),
	(169, 'NextAuth');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
