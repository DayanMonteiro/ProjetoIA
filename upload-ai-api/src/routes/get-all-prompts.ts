import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

// recebe como parametro a aplicação app decrarada no server.ts
export async function getAllPromptsRoute(app: FastifyInstance) {
  app.get("/prompts", async () => {
    const prompts = await prisma.prompt.findMany();
    return prompts;
  });
}
