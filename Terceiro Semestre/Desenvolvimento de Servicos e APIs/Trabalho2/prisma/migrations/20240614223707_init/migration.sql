/*
  Warnings:

  - You are about to drop the `imoveis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `imoveis`;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `turma` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `nomeResponsavel` VARCHAR(191) NOT NULL,
    `whatsApp` VARCHAR(191) NOT NULL,
    `numCompras` INTEGER NOT NULL DEFAULT 0,
    `totalCompras` DOUBLE NOT NULL DEFAULT 0,
    `numDepositos` INTEGER NOT NULL DEFAULT 0,
    `totalDepositos` DOUBLE NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gasto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `lanche` VARCHAR(191) NOT NULL,
    `valorTotal` DOUBLE NOT NULL,
    `alunoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deposito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `tipo` ENUM('PIX', 'Cartao', 'Dinheiro') NOT NULL,
    `valor` DOUBLE NOT NULL,
    `alunoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deposito` ADD CONSTRAINT `Deposito_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
