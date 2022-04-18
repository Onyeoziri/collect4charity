-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cosc484
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cosc484
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cosc484` DEFAULT CHARACTER SET utf8 ;
USE `cosc484` ;

-- -----------------------------------------------------
-- Table `cosc484`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cosc484`.`admin` (
  `adminID` INT NOT NULL,
  `adminUsername` VARCHAR(45) NOT NULL,
  `adminPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`adminID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cosc484`.`charity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cosc484`.`charity` (
  `charityID` INT NOT NULL,
  `charityName` VARCHAR(45) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `category` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`charityID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cosc484`.`approval`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cosc484`.`approval` (
  `date` DATE NOT NULL,
  `adminID` INT NOT NULL,
  `charityID` INT NOT NULL,
  PRIMARY KEY (`date`, `adminID`, `charityID`),
  INDEX `adminID_idx` (`adminID` ASC),
  INDEX `charityID_idx` (`charityID` ASC),
  CONSTRAINT `adminID`
    FOREIGN KEY (`adminID`)
    REFERENCES `cosc484`.`admin` (`adminID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `charityID`
    FOREIGN KEY (`charityID`)
    REFERENCES `cosc484`.`charity` (`charityID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cosc484`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cosc484`.`user` (
  `userID` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `userPassword` VARCHAR(45) NOT NULL,
  `fName` VARCHAR(45) NULL DEFAULT NULL,
  `lName` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `dob` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cosc484`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cosc484`.`payment` (
  `paymentID` INT NOT NULL,
  `cardNum` VARCHAR(45) NULL DEFAULT NULL,
  `exDate` VARCHAR(45) NULL DEFAULT NULL,
  `cvv` VARCHAR(45) NULL DEFAULT NULL,
  `userID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`paymentID`),
  INDEX `userID_idx` (`userID` ASC),
  CONSTRAINT `userID`
    FOREIGN KEY (`userID`)
    REFERENCES `cosc484`.`user` (`userID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cosc484`.`donation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cosc484`.`donation` (
  `donationID` INT NOT NULL,
  `donationAmount` VARCHAR(45) NULL DEFAULT NULL,
  `userID` INT NULL DEFAULT NULL,
  `paymentID` INT NULL DEFAULT NULL,
  `charityID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`donationID`),
  INDEX `charityID_idx` (`charityID` ASC),
  INDEX `paymentID_idx` (`paymentID` ASC),
  INDEX `userID_idx` (`userID` ASC),
  CONSTRAINT `charity_ID`
    FOREIGN KEY (`charityID`)
    REFERENCES `cosc484`.`charity` (`charityID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `payment_ID`
    FOREIGN KEY (`paymentID`)
    REFERENCES `cosc484`.`payment` (`paymentID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `user_ID`
    FOREIGN KEY (`userID`)
    REFERENCES `cosc484`.`user` (`userID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
