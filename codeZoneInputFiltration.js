import { codeZoneValidationStrategy } from './codeZoneValidationStrategy';
import { helper } from './helper';

export const codeZoneInputFiltration = (input) => {
  let el = document.querySelector(`input[name=${input.name}]`);
  input.rules.forEach((rule) => {

    let validationError = codeZoneValidationStrategy[rule.name](el.value, rule);
    if(validationError) {
      helper.errorHandler({
        name: input.name,
        rules: [
          {name: rule.name, errMsg: validationError}
        ]
      })
    }
  })
}
