CREATE DATABASE TIGERSYSTEM;
CREATE TABLE PRODUCT (
      ID BIGSERIAL NOT NULL PRIMARY KEY,
	    NAME VARCHAR(100) NOT NULL,
      DESCRIPTION VARCHAR(255),
	  PRICE NUMERIC(16,2),
	  SKU VARCHAR(20),
		DATE_REGISTER DATE
)

Create table client (
     id bigserial not null primary key,
     birth_date date not null,
	   name varchar(100) not null,
	   address varchar(255) not null,
	  cpf varchar(14) not null,
	  phone_number varchar(20),
	  email varchar(100),
	  date_register date
);