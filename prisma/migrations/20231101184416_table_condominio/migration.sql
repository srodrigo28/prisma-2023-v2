-- CreateTable
CREATE TABLE "condominio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "estadual" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "condominio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "condominio_nome_key" ON "condominio"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "condominio_cnpj_key" ON "condominio"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "condominio_estadual_key" ON "condominio"("estadual");

-- CreateIndex
CREATE UNIQUE INDEX "condominio_email_key" ON "condominio"("email");

-- CreateIndex
CREATE UNIQUE INDEX "condominio_endereco_key" ON "condominio"("endereco");
