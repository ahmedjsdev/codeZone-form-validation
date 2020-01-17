import { codeZoneInputFiltration } from './codeZoneInputFiltration';
import { helper } from './helper';

export const codeZoneFormValidation = (inputs) => {
  inputs.forEach((input) => {
    codeZoneInputFiltration(input);
  })
  return helper.buildSchema();
}
