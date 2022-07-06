alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);

desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 11, 0),
    (2, 1, 0),
    (2, 11, 1);

select * from `empresas_unidades`;