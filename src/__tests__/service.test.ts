import { CfcHttpService } from '../index';

jest.mock('../index');
test('Test http service', () => {
  let cfcHttpService: CfcHttpService;
  expect(cfcHttpService.checkServiceIsAlive('alive')).toBe('Service is alive');
  //expect(Greeter('Keshav first test')).toBe('Hello Keshav first test');
});

// describe('Test http service', () => {
  
//   let cfcHttpService:CfcHttpService;
//   beforeAll(() => {
    
//   })

//   beforeEach(() => {
//     //do something
//   })

//   afterAll(() => {
//     //do something
//   })

//   test(/*...*/)
  
// }
