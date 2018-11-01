import { CfcHttpService } from '../index';
import { HttpClient } from '@angular/common/http';


describe('Test suit', () => {
  
  // beforeAll(() => {
    
  // })

  // beforeEach(() => {
  //   //do something
  // })

  // afterAll(() => {
  //   //do something
  // })

  test('Test http service', () => {
    const Mock = jest.fn<HttpClient>(() => ({
      checkServiceIsAlive: jest.fn(),
    }));
    const mock = new Mock();
    const instance = new CfcHttpService(mock);
    //instance.checkServiceIsAlive('alive');
  
    expect(instance.checkServiceIsAlive('alive')).toBe('Service is alive');
    
    //expect(Greeter('Keshav first test')).toBe('Hello Keshav first test');
  });
  
});
