create database if not exists burgers_db;
use burgers_db;
create table burgers (
    id int primary key auto_increment,
    burger_name text,
    devoured boolean
)
