import React from 'react'
import { useHistory } from 'react-router'
import ButtonPrimary from '../../components/buttons/Buttons'
// import Logo from '../../Images/logo.png'
import PageEdit from '../../layouts/pageTypes/PageEdit'
import { ApiStorageAction } from '../../redux/apiStorageAction'
import { notifyError } from '../../utils/notifications'
import UserActions from '../../actions/userActions'
import FormContainer from '../../components/formContainer/FormContainer'
import InputFormText from '../../components/form/inputFormText/InputFormText'
import InputFormPassword from '../../components/form/inputFormPassword/InputFormPassword'
import { withTranslation } from 'react-i18next'
import './Login.less'
import AraqichLogo from '../../components/icons/AraqichLogo'

const Login = props => {
  const { t } = props
  const history = useHistory()

  const onFinish = async values => {
    const result = await UserActions.login(values.email, values.password)
    if (result.success) {
      ApiStorageAction.setAccessToken(result.data.ACCESS_TOKEN)
      history.push('/home')
    } else {
      notifyError(result.errMsg)
    }
  }

  const initialValues = {
    email: 'test',
    password: '1234'
  }

  return (
    <PageEdit>
      <div className="login-page">
        {/* <img className="aragich-logo" alt="Araqich" src={Logo} /> */}
        <AraqichLogo />
        <FormContainer
          initialValues={initialValues}
          name="login"
          onFinish={onFinish}
        >
          <InputFormText placeholder="Email" name="email" required />
          <InputFormPassword placeholder="Password" name="password" required />
          <ButtonPrimary
            type="primary"
            label={t('Sign_In')}
            htmlType="submit"
          />
        </FormContainer>
      </div>
    </PageEdit>
  )
}

export default withTranslation()(Login)
