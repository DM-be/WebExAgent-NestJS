import { Test, TestingModule } from '@nestjs/testing';
import { PassedController } from './passed.controller';

describe('Passed Controller', () => {
  let controller: PassedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassedController],
    }).compile();

    controller = module.get<PassedController>(PassedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
