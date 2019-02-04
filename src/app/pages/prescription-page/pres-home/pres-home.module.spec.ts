import { PresHomeModule } from './pres-home.module';

describe('PresHomeModule', () => {
  let presHomeModule: PresHomeModule;

  beforeEach(() => {
    presHomeModule = new PresHomeModule();
  });

  it('should create an instance', () => {
    expect(presHomeModule).toBeTruthy();
  });
});
