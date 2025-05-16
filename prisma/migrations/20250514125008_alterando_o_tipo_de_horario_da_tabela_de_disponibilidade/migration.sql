/*
  Warnings:

  - Changed the type of `horaInicio` on the `Consulta` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `horaInicio` on the `Disponibilidade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `horaFim` on the `Disponibilidade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Consulta" DROP COLUMN "horaInicio",
ADD COLUMN     "horaInicio" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Disponibilidade" DROP COLUMN "horaInicio",
ADD COLUMN     "horaInicio" TIMESTAMP(3) NOT NULL,
DROP COLUMN "horaFim",
ADD COLUMN     "horaFim" TIMESTAMP(3) NOT NULL;
