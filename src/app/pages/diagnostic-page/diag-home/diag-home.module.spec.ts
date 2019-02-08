import { DiagHomeModule } from './diag-home.module';

describe('DiagHomeModule', () => {
  let diagHomeModule: DiagHomeModule;

  beforeEach(() => {
    diagHomeModule = new DiagHomeModule();
  });

  it('should create an instance', () => {
    expect(diagHomeModule).toBeTruthy();
  });
});
