import Joi from 'joi';

export const userSignupSchema =  Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.string().required()
});

export const userSignin = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
});

export const userUpdateShema = Joi.object({
    updateName: Joi.string(),
    updateEmail: Joi.string,
    updatePassword : Joi.string,
    updateStatus: Joi.string()
})
