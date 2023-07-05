-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN,
    "createdAt" DATETIME NOT NULL,
    "authorId" TEXT NOT NULL
);
