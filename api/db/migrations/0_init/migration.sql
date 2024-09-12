
Running Prisma CLI...
$ yarn prisma migrate diff --from-empty --to-schema-datamodel api/db/schema.prisma --script

-- CreateTable
CREATE TABLE `Valley` (
    `unique_sample_number` INTEGER NOT NULL,
    `sample_id` TEXT NULL,
    `TEC` DOUBLE NULL,
    `pH (1:1)` DOUBLE NULL,
    `EC (2:1)` DOUBLE NULL,
    `Sulfur` DOUBLE NULL,
    `Phosphorus` DOUBLE NULL,
    `Olsen P` DOUBLE NULL,
    `Calcium` DOUBLE NULL,
    `Magnesium` DOUBLE NULL,
    `Potassium` DOUBLE NULL,
    `Sodium` DOUBLE NULL,
    `Boron` DOUBLE NULL,
    `Iron` DOUBLE NULL,
    `Manganese` DOUBLE NULL,
    `Copper` DOUBLE NULL,
    `Zinc` DOUBLE NULL,
    `Aluminum` DOUBLE NULL,
    `Total Carbon %` DOUBLE NULL,
    `Total Nitrogen %` DOUBLE NULL,
    `C/N Ratio` DOUBLE NULL,
    `Nitrate-N` DOUBLE NULL,
    `Ammonium-N` DOUBLE NULL,
    `KCl Aluminum` DOUBLE NULL,

    UNIQUE INDEX `unique_sample_number`(`unique_sample_number`),
    PRIMARY KEY (`unique_sample_number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

