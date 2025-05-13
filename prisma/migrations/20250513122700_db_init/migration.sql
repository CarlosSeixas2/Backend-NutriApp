-- CreateEnum
CREATE TYPE "TipoRegistro" AS ENUM ('CRM', 'CRN', 'CREFITO', 'CRP');

-- CreateTable
CREATE TABLE "Paciente" (
    "id" UUID NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id" UUID NOT NULL,
    "tipoRegistro" "TipoRegistro" NOT NULL,
    "numeroRegistro" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "instituicaoFormadora" TEXT NOT NULL,
    "tipoProfissional" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "avatar" TEXT,
    "genero" TEXT NOT NULL,
    "profissionalId" UUID,
    "pacienteId" UUID,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinica" (
    "id" UUID NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "inscricaoEstadual" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "tipoAtendimento" TEXT NOT NULL,

    CONSTRAINT "Clinica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiaSemana" (
    "id" UUID NOT NULL,
    "dia" TEXT NOT NULL,

    CONSTRAINT "DiaSemana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disponibilidade" (
    "id" UUID NOT NULL,
    "diaSemanaId" UUID NOT NULL,
    "horaInicio" TIME(0) NOT NULL,
    "horaFim" TIME(0) NOT NULL,

    CONSTRAINT "Disponibilidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" UUID NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnderecoUsuario" (
    "id" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,
    "enderecoId" UUID NOT NULL,

    CONSTRAINT "EnderecoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnderecoClinica" (
    "id" UUID NOT NULL,
    "clinicaId" UUID NOT NULL,
    "enderecoId" UUID NOT NULL,

    CONSTRAINT "EnderecoClinica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "horaInicio" TIME(0) NOT NULL,
    "horaFim" TIME(0) NOT NULL,
    "turno" TEXT NOT NULL,
    "tipoConsulta" TEXT NOT NULL,
    "observacao" TEXT,
    "motivo" TEXT NOT NULL,
    "avaliacao" TEXT,
    "valor" DOUBLE PRECISION,
    "status" TEXT NOT NULL,
    "pacienteId" UUID NOT NULL,
    "profissionalId" UUID NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoricoMedico" (
    "id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "tipoRegistro" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "sintomas" TEXT NOT NULL,
    "tratamentoPrescrito" TEXT NOT NULL,
    "medicamentos" TEXT NOT NULL,
    "resultadosExames" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "alergias" TEXT NOT NULL,
    "antecedentesFamiliares" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "pacienteId" UUID NOT NULL,
    "profissionalId" UUID NOT NULL,
    "consultaId" UUID NOT NULL,

    CONSTRAINT "HistoricoMedico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disponibilidade" ADD CONSTRAINT "Disponibilidade_diaSemanaId_fkey" FOREIGN KEY ("diaSemanaId") REFERENCES "DiaSemana"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnderecoUsuario" ADD CONSTRAINT "EnderecoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnderecoUsuario" ADD CONSTRAINT "EnderecoUsuario_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnderecoClinica" ADD CONSTRAINT "EnderecoClinica_clinicaId_fkey" FOREIGN KEY ("clinicaId") REFERENCES "Clinica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnderecoClinica" ADD CONSTRAINT "EnderecoClinica_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoMedico" ADD CONSTRAINT "HistoricoMedico_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoMedico" ADD CONSTRAINT "HistoricoMedico_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoMedico" ADD CONSTRAINT "HistoricoMedico_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
