DROP DATABASE IF EXISTS linkspeak;

CREATE DATABASE linkspeak;

USE linkspeak;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username varChar(50),
  password varChar(50),
  PRIMARY KEY (id)
);

CREATE TABLE surveys (
  type varChar(50),
  surveynum int,
  creator int,
  FOREIGN KEY (creator) REFERENCES user (id)
);

CREATE TABLE multiple (
  id int NOT NULL AUTO_INCREMENT,
  question varChar(250),
  total int,
  first int,
  second int,
  third int,
  fourth int,
  PRIMARY KEY (id)
)
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
