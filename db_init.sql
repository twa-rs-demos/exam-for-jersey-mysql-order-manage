CREATE DATABASE `supermarket` CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'supermarket'@'%' IDENTIFIED BY 'supermarket';
GRANT ALL PRIVILEGES ON supermarket.* TO 'supermarket'@'%';
FLUSH PRIVILEGES;
