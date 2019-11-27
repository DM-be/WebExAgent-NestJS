import { Test, TestingModule } from '@nestjs/testing';
import { BirthdayMessageResponderService } from './birthday-message-responder.service';

describe('BirthdayMessageResponderService', () => {
  let service: BirthdayMessageResponderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthdayMessageResponderService],
    }).compile();

    service = module.get<BirthdayMessageResponderService>(BirthdayMessageResponderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
