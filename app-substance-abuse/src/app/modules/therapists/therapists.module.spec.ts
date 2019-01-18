import { TherapistsModule } from './therapists.module';

describe('TherapistsModule', () => {
  let therapistsModule: TherapistsModule;

  beforeEach(() => {
    therapistsModule = new TherapistsModule();
  });

  it('should create an instance', () => {
    expect(therapistsModule).toBeTruthy();
  });
});
