import Joi from 'joi';

export const userSignupSchema =  Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.string().required()
});

export const userSigninSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
});

export const userUpdateSchema = Joi.object({
    updateName: Joi.string(),
    updateEmail: Joi.string,
    updatePassword : Joi.string,
    updateStatus: Joi.string()
})
