-- CreateTable
CREATE TABLE `imoveis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('Casa', 'Apto', 'Sala') NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `dorm` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
