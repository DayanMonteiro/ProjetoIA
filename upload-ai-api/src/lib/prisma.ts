import { PrismaClient } from "@prisma/client";

// faz a conexão com o banco
export const prisma = new PrismaClient();
