/*
  Warnings:

  - Added the required column `clinicaId` to the `Disponibilidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissionalId` to the `Disponibilidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disponibilidade" ADD COLUMN     "clinicaId" UUID NOT NULL,
ADD COLUMN     "profissionalId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_clinicaId_fkey" FOREIGN KEY ("clinicaId") REFERENCES "Clinica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
