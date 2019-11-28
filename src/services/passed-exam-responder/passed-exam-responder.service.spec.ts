import { Test, TestingModule } from '@nestjs/testing';
import { PassedExamResponderService } from './passed-exam-responder.service';

describe('PassedExamResponderService', () => {
  let service: PassedExamResponderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassedExamResponderService],
    }).compile();

    service = module.get<PassedExamResponderService>(PassedExamResponderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
