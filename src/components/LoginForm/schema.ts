import * as Yup from 'yup';

export const AuthLoginSchema = Yup.object().shape({
  email: Yup.string().required('Email obrigatório').email('Email inválido!'),
  password: Yup.string().required('Senha obrigatória'),
});
