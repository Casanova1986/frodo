/*
Navicat MySQL Data Transfer

Source Server         : 192.168.0.170
Source Server Version : 50537
Source Host           : 192.168.0.170:3306
Source Database       : frodo

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2016-02-03 14:05:25
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `items`
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `item_id` varchar(12) NOT NULL,
  `product_id` varchar(12) NOT NULL,
  `size` varchar(3) NOT NULL,
  `color` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`item_id`),
  KEY `f_productID` (`product_id`),
  CONSTRAINT `f_productID` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO items VALUES ('DA0001M001', 'DA0001', 'M', 'xanh cobain', '1');
INSERT INTO items VALUES ('DA0001S001', 'DA0001', 'S', 'đỏ', '1');

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` varchar(12) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `category_id` varchar(4) DEFAULT NULL,
  `price` decimal(20,0) NOT NULL,
  `num` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO products VALUES ('DA0001', 'Đầm chấm bi', 'DA', '1150000', '12', '1');
INSERT INTO products VALUES ('SM0001', 'Sơ Mi 0001', 'SM', '750000', '6', '1');
