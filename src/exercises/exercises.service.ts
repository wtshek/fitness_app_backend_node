import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseGroupType } from '../utils/type';

@Injectable()
export class ExercisesService {
  constructor(private readonly prisma: PrismaService) {}

  async getExerciseGroups(): Promise<ExerciseGroupType[] | null> {
    return this.prisma.exerciseGroup.findMany();
  }
}
