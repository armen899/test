import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/buttons/Buttons';
import PageEdit from '../../layouts/pageTypes/PageEdit';

const Home = (props) => {
    const { t } = props
    return (
        <PageEdit >
            <div style={{ marginTop: "30px" }}>
                <Link to="/login">
                    <ButtonPrimary label={t("Log_In")} />
                </Link>
            </div>
        </PageEdit>
    );
}

export default withTranslation()(Home)