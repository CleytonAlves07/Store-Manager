const Joi = require('joi');

const schemaName = Joi.object().keys({
  name: Joi
    .string()
    .min(5)
    .required()
    .message({ 'string.min': '"name" length must be at least 5 characters long' }),
});

module.exports = {
  schemaName,
};