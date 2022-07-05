create table if not exists cidades (
    id INT unsigned not null AUTO_iNCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id int unsigned not null,
    area Decimal(10, 2),
    PRIMARY key (id),
    FOREIGN KEY (estado_id) REFERENCES `estados` (id)
);

create table if not exists teste (
    id INT unsigned not null AUTO_iNCREMENT PRIMARY KEY
);

drop table if exists teste;