-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "animalName" TEXT NOT NULL,
    "animalAge" INTEGER NOT NULL,
    "animalSpecies" TEXT NOT NULL,
    "animalColor" TEXT NOT NULL,
    "animalBreed" TEXT NOT NULL,
    "animalSex" TEXT NOT NULL,
    "animalWeight" DOUBLE PRECISION,
    "isNeutered" BOOLEAN NOT NULL,
    "preExistingConditions" TEXT,
    "photo" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
