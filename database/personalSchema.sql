-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'deals'
-- 
-- ---

DROP TABLE IF EXISTS `deals`;
		
CREATE TABLE `deals` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `merchant_name` VARCHAR(100) NOT NULL,
  `merchant_lat` VARCHAR(30) NOT NULL,
  `merchant_lng` VARCHAR(30) NOT NULL,
  `starts` VARCHAR(15) NOT NULL,
  `ends` VARCHAR(15) NOT NULL,
  `highlights` VARCHAR(255) NULL DEFAULT NULL,
  `pitch` VARCHAR(255) NULL DEFAULT NULL,
  `fine_print` VARCHAR(255) NULL DEFAULT NULL,
  `deal_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `deals` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `deals` (`id`,`merchant_name`,`merchant_lat`,`merchant_lng`,`starts`,`ends`,`highlights`,`pitch`,`fine_print`,`deal_url`) VALUES
('','','','','','','','','','');
