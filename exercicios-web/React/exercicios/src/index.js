import React from 'react'
import { createRoot } from 'react-dom/client';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <div>
        <Pai nome='Irenaldo' sobrenome='Silva'>
            {/** Como passo os componentes filhos aqui?? */}
            <Filho nome="Pedro" ></Filho>
            <Filho nome="Paulo" ></Filho>
            <Filho nome="Carla" ></Filho>
        </Pai>        
    </div>
)
