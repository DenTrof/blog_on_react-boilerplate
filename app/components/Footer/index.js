import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import styled from 'styled-components';


const FootpWrapper = styled.div`
 margin-left:150px;
`;

function Footer() {
  return (
    <Wrapper>
    <FootpWrapper>
        <p><FormattedMessage {...messages.licenseMessage} /></p>
      </FootpWrapper>
    </Wrapper>
  );
}


export default Footer;
