import { PrismaClient } from "@prisma/client";
import { guests } from "./data";
const prisma = new PrismaClient();

export const load = async () => {
  try {
    await prisma.user.deleteMany();
    console.log("Deleted records in user table");
    await prisma.guest.deleteMany();
    console.log("Deleted records in guest table");

    // await prisma.user.createMany({
    //   data: categories,
    // });
    // console.log("Added user data");

    await prisma.guest.createMany({
      data: guests,
    });
    console.log("Added guest data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
