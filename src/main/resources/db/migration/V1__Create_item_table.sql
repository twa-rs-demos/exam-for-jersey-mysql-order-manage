CREATE TABLE `item` (
     `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
     `price` double unsigned NOT NULL DEFAULT '0',
     `name` varchar(255) DEFAULT NULL,
     PRIMARY KEY (`id`)
   ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
