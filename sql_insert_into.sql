CREATE TABLE contact (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  PRIMARY KEY (id));

insert into contact values (10, 'Leia', 'Skywalker');

insert into contact (first_name,last_name) values ('Han', 'Solo');

insert into contact (first_name,last_name) values ('Han', 'Solo'),('Leia', 'Skywalker');
