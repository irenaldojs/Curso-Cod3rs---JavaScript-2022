select * from estados WHERE id = 25;

INSERT into cidades (nome, area, estado_id)
    VALUES('Campinas', 795, 25);

insert into cidades (nome, area, estado_id)
    values('Niteroi', 133.9, 25);

insert into `cidades`(nome, area, estado_id)
    values('Caruaru', 
            920.6, 
            (select id from estados WHERE sigla = 'PE')
            );

insert into cidades
    (nome, area, estado_id)
    values('Juazeiro do Norte',
            248.2,
            (select id from estados where sigla='CE')
            );