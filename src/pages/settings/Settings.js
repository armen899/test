import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import userActions from '../../actions/userActions';
import ButtonPrimary from '../../components/buttons/Buttons';
import i18n from '../../i18n';

const Settings = (props) => {
    const { t } = props;
    return (
        <>
            <button onClick={(lng) => i18n.changeLanguage("en")}>English</button>
            <button onClick={(lng) => i18n.changeLanguage("hy")}>Armenian</button>
            <br />
            <ButtonPrimary
                type="primary"
                onClick={() => {
                    userActions.logout()
                }}
                label={<Link to="/login" >
                    {t("Log_OUT")}
                </Link>}
            />
        </>
    );
}

export default withTranslation()(Settings);