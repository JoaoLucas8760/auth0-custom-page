import * as Yup from 'yup';

export const AuthRegisterSchema = Yup.object().shape({
  email: Yup.string().required('Email obrigatório').email('Email inválido!'),
  password: Yup.string().required('Senha obrigatória'),
  phone: Yup.string().required('Telefone obrigatório'),
  first_name: Yup.string().required('Nome obrigatório'),
  last_name: Yup.string().required('Nome obrigatório'),
  identity: Yup.string().required('Numero do documento obrigatório'),
});
