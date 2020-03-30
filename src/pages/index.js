import React from 'react';
import { Link } from 'gatsby';

import Index from '../components/Layout';
import SEO from '../components/seo';
import Button from '../components/Button/button';
import Menu from '../components/Menu/menu';
import MainSectionTitle from '../components/MainSectionTitle/mainsectiontitle';
import MainSectionText from '../components/MainSectionText/mainsectiontext';

const IndexPage = () => (
  <Index>
    <SEO title="Home" />
    <Menu />
    <MainSectionTitle />
    <MainSectionText />
    <Button>Call to action</Button>
  </Index>
);

export default IndexPage;
