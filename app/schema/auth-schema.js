"use strict";
const Joi = require("joi-i18n");
const ptBr = require("./../util/locatePtBr");

Joi.addLocaleData("pt_BR", ptBr);

const authSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = authSchema;
