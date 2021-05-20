CREATE TABLE contact (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  PRIMARY KEY (id));



describe  contact;
ALTER TABLE contact add column phone_number varchar(50);
ALTER TABLE contact add phone_number varchar(50);
ALTER TABLE contact ALTER phone_number SET DEFAULT '-';
ALTER TABLE contact drop column phone_number;
ALTER TABLE contact add column phone_number varchar(50) AFTER last_name;
ALTER TABLE contact MODIFY COLUMN phone_number INT;
