import React from 'react';

import Index from '../components/Layout';
import SEO from '../components/seo';
import Button from '../components/Button/button';
import Menu from '../components/Menu/menu';
import MainSectionTitle from '../components/MainSectionTitle/mainsectiontitle';
import MainSectionText from '../components/MainSectionText/mainsectiontext';
import Section from '../components/Section/section';

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
      </Section>
    </Index>
  );
};
export default IndexPage;
