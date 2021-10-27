import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import LoginStore from '../../../store/LoginStore';
// ----------------------------------------------------------------------

export default function FindForm(props) {
  const ls = LoginStore;
  const navigate = useNavigate();
 
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
//   axios.post('http://localhost:8000/login/',{
//     username,
//     password,
// }).then(function (res){
//     console.log(res)
//     console.log(res.data.token)
//     console.log(res.config.data)
//     localStorage.setItem('token', res.data.token);
//     localStorage.setItem('user', res.config.data);
//     loginInfo.setUser(res.config.data);
//     loginInfo.setToken(res.data.token);
// }).catch(function (err){
//     console.log(err)
//     alert("아이디, 비밀번호를 확인하세요.")
// })
// }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      // postLoginInfo(values)
      navigate('/dashboard', { replace: true });    }
  });

  const handleSubmit = (event) => {
    axios.post('http://localhost:8000/user/password_reset/',{
        email: values.email,
    }).then(function (res){
      // console.log(res)
    }).catch(function (err){
      console.log(err)
      alert("사용불가능한 아이디입니다.")
    })
    event.preventDefault();
  }

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="/register">
            Register
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={handleSubmit}
        >
          ResetPassword
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
