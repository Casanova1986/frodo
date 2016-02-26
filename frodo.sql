/*
 Navicat Premium Data Transfer

 Source Server         : frodo_ubuntu
 Source Server Type    : MySQL
 Source Server Version : 50547
 Source Host           : localhost
 Source Database       : frodo

 Target Server Type    : MySQL
 Target Server Version : 50547
 File Encoding         : utf-8

 Date: 02/18/2016 16:04:28 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `items`
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
--  Records of `items`
-- ----------------------------
BEGIN;
INSERT INTO `items` VALUES ('DA0001M001', 'DA0001', 'M', 'xanh cobain', '1'), ('DA0001S001', 'DA0001', 'S', 'đỏ', '1');
COMMIT;

-- ----------------------------
--  Table structure for `products`
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
--  Records of `products`
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES ('DA0001', 'Đầm chấm bi', 'DA', '1150000', '12', '1'), ('SM0001', 'Sơ Mi 0001', 'SM', '750000', '6', '1');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `status` int(1) NOT NULL COMMENT '0: bi khoa, 1: dang hoat dong',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('haibang', '123456', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
