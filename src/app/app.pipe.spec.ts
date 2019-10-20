import { AddMrPipe } from './app.pipe';

describe('AppPipe', () => {
  it('create an instance', () => {
    const pipe = new AddMrPipe();
    expect(pipe).toBeTruthy();
  });

  it('It should add Mr to each word', () => {
    const pipe = new AddMrPipe();
    const name = 'john snow'

    const result = pipe.transform(name);

    expect(result).toBe('Mr john snow');
  });
});
