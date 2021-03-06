import { Server, Request, ResponseToolkit } from "@hapi/hapi"
import { centros_aislamiento } from './routes/centros_aislamiento.routes'
import { centros_diagnostico } from './routes/centros_diagnostico.routes'
import { resumen_dia } from './routes/resumen_dia.routes'
import { casos } from './routes/casos.routes';

import { api } from './routes/api.routes';
import { api_graph } from './routes/api_graph.routes'

export const init = async () => {
    const server: Server = new Server({
        port: process.env.PORT || 3000,
    })

    server.route({
        path: '/',
        method: 'GET',
        handler: (req: Request, h: ResponseToolkit) => {
            return h.response('Covid19 Cuba API')
        }
    })

    centros_aislamiento(server)
    centros_diagnostico(server)
    resumen_dia(server)
    casos(server)

    api(server)
    api_graph(server)

    await server.start()
    console.log('Server runing on %s', server.info.uri);
}