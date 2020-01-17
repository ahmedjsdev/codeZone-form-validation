let errors = [];

const _check = err => {
  return errors.find(error => error.name === err.name);
};

export const helper = {
  errorHandler: error => {
    // logic
    let check = _check(error);
    if (check) {
      check.rules.push(...error.rules);
    } else {
      errors.push(error);
    }
  },
  buildSchema: () => {
    let outputSchema;
    if (errors.length) {
      outputSchema = { valid: false, errors: [...errors] };
      errors = [];
    } else {
      outputSchema = { valid: true, errors: [] };
    }
    return outputSchema;
  }
};
