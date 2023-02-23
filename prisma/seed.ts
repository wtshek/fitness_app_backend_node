import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const exercisesGroup = [
  {
    title: 'Triceps',
    path: '/triceps',
    image: undefined,
  },
  {
    title: 'Chest',
    path: '/chest',
    image: undefined,
  },
  {
    title: 'Shoulders',
    path: '/shoulders',
    image: undefined,
  },
  {
    title: 'Biceps',
    path: '/biceps',
    image: undefined,
  },
  {
    title: 'Core',
    path: '/core',
    image: undefined,
  },
  {
    title: 'Back',
    path: '/back',
    image: undefined,
  },
  {
    title: 'Forearms',
    path: '/forearms',
    image: undefined,
  },
  {
    title: 'Upper Legs',
    path: '/upper-legs',
    image: undefined,
  },
  {
    title: 'Glutes',
    path: '/glutes',
    image: undefined,
  },
  {
    title: 'Cardio',
    path: '/cardio',
    image: undefined,
  },
  {
    title: 'Lower Legs',
    path: '/lower-legs',
    image: undefined,
  },
];

async function seed() {
  for (const exerciseGroup of exercisesGroup) {
    await prisma.exerciseGroup.create({
      data: {
        title: exerciseGroup.title,
        path: exerciseGroup.path,
        image: exerciseGroup.image,
      },
    });
  }
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
