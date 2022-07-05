select
    regiao as 'Região',
    sum(populacao) as Total
        from `estados`
        group by regiao
        order by Total desc

-- sum() soma
select
    sum(populacao) as Total
        from `estados`

-- avg() - media
select
    avg(populacao) as Total
        from `estados`