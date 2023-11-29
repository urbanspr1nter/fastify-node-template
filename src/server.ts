import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();

(async () => {
    await init();
})();

async function init() {
    const fastify = Fastify({
        logger: true,
    });

    fastify.register(cors);

    fastify.get("/", async (_request, response) => {
        return response.send({ status: 200, data: "OK" });
    });

    await fastify.listen({ port: parseInt(process.env.PORT) || 3000 });
}
