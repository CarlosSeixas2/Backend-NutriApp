/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "alergias" TEXT;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PlanoSaude" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "operadora" TEXT NOT NULL,

    CONSTRAINT "PlanoSaude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PacientePlanoSaude" (
    "id" UUID NOT NULL,
    "pacienteId" UUID NOT NULL,
    "planoId" UUID NOT NULL,
    "numeroCarteirinha" TEXT NOT NULL,
    "validade" DATE NOT NULL,
    "nomeTitular" TEXT NOT NULL,

    CONSTRAINT "PacientePlanoSaude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfissionalPlanoSaude" (
    "id" UUID NOT NULL,
    "profissionalId" UUID NOT NULL,
    "planoId" UUID NOT NULL,

    CONSTRAINT "ProfissionalPlanoSaude_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- AddForeignKey
ALTER TABLE "PacientePlanoSaude" ADD CONSTRAINT "PacientePlanoSaude_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PacientePlanoSaude" ADD CONSTRAINT "PacientePlanoSaude_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "PlanoSaude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfissionalPlanoSaude" ADD CONSTRAINT "ProfissionalPlanoSaude_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfissionalPlanoSaude" ADD CONSTRAINT "ProfissionalPlanoSaude_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "PlanoSaude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
