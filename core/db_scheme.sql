CREATE TABLE t_category (
  id          INT(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
  parent_id   INT          NOT NULL,
  path        VARCHAR(100) NOT NULL,
  name        VARCHAR(100) NOT NULL,
  description VARCHAR(100)
);


CREATE TABLE t_content (
  id          INT(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(100) NOT NULL,
  url         VARCHAR(150) NOT NULL,
  params      VARCHAR(1000),
  detail      TEXT,
  category_id INT(11),
  insert_date DATETIME     NOT NULL,
  update_date DATETIME     NOT NULL
);

create table t_testuser(
  id          INT(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username       VARCHAR(30) NOT NULL,
  password         VARCHAR(30) NOT NULL
)