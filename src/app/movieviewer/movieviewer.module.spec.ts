import { MovieviewerModule } from './movieviewer.module';

describe('MovieviewerModule', () => {
  let movieviewerModule: MovieviewerModule;

  beforeEach(() => {
    movieviewerModule = new MovieviewerModule();
  });

  it('should create an instance', () => {
    expect(movieviewerModule).toBeTruthy();
  });
});
