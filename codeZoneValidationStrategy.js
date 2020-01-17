export const codeZoneValidationStrategy = {
  required: (inputValue, rule) => {
    if(rule.value && !inputValue) {
      return rule.errMsg;
    }
  },
  maxLength: (inputValue, rule) => {
    if(!inputValue || inputValue.length > rule.value) {
      return rule.errMsg;
    }
  },
  minLength: (inputValue, rule) => {
    if(inputValue.length < rule.value) {
      return rule.errMsg;
    }
  }
}
