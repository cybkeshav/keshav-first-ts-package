import { CfcHttpService } from '../index';
test('Test http service', () =>{
  let cfcHttpService:CfcHttpService;
  expect(cfcHttpService.checkServiceIsAlive('alive')).toBe('Service is alive');
  //expect(Greeter('Keshav first test')).toBe('Hello Keshav first test');
});