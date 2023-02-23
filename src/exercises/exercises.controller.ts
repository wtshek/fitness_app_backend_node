import { Controller, Get } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExerciseGroupType } from 'src/utils/type';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exerciseService: ExercisesService) {}

  @Get()
  async getExerciseGroups(): Promise<ExerciseGroupType[]> {
    return await this.exerciseService.getExerciseGroups();
  }
}
