"use strict";

const Joi = require("joi-i18n");

module.exports.schemaValidator = async (body, schema) => {
  Joi.validate(body, schema, { locale: "pt_BR" }, (err, value) => {
    if (err) {
      throw err.message;
    }
  });
  return body;
};
