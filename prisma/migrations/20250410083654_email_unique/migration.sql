/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Users_username_key` ON `users`;

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);
