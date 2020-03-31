import React from 'react';

import Index from '../components/Layout';
import SEO from '../components/seo';
import Button from '../components/Button/button';
import Menu from '../components/Menu/menu';
import MainSectionTitle from '../components/MainSection/MainSectionTitle/mainsectiontitle';
import MainSectionText from '../components/MainSection/MainSectionText/mainsectiontext';
import Section from '../components/MainSection/mainsection';
import BgCurve from '../components/MainSection/BgCurve/bgcurve';

const IndexPage = () => {
  return (
    <Index>
      <SEO title="Home" />
      <Menu />
      <Section type="main">
        <div>
          <MainSectionTitle />
          <MainSectionText />
          <Button>Call to action</Button>
        </div>
        <BgCurve/>
      </Section>
    </Index>
  );
};
export default IndexPage;
