import * as yup from 'yup';

// схема валидации для вывода ошибок при вводе
export const validationSchema = yup.object({
    password: yup
        .string()
        .required('Необходимо ввести пароль!')
        .min(4, 'Пароль содержит минимум 4 символа')
        .max(13, 'Слишком много символов'),
});
