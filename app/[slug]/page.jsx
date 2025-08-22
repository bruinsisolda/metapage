import React from 'react';
import AccountPageComponent from './index';
import "../../styles/pages/Supportpage.scss";

export { generateMetadata } from './generateMetadata';
const AccountPage = async () => {
    return <AccountPageComponent />;
};

export default AccountPage;
