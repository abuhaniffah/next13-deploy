/*
  Warnings:

  - You are about to drop the column `Comment` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `comment` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `Comment`,
    DROP COLUMN `user_name`,
    ADD COLUMN `comment` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;
