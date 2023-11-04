/*
  Warnings:

  - Added the required column `bairro` to the `condominio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `condominio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `condominio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "condominio" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "responsavel" TEXT,
ADD COLUMN     "telefone" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "valor" DECIMAL(65,30) NOT NULL;
