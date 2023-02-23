import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from './exercises.controller';
// TODO: fix the path, use alias
import { exercisesGroup } from '../mockData/exercise';
import { ExercisesService } from './exercises.service';

describe('ExercisesController', () => {
  let controller: ExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      providers: [ExercisesService],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get the exercise groups', () => {
    expect(controller.getExerciseGroups()).toEqual(
      expect.arrayContaining([expect.objectContaining(exercisesGroup)]),
    );
  });
});
