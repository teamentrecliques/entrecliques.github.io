import React from 'react';
import { Link } from 'gatsby';

import Index from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Button from '../components/Button/button';
import Menu from '../components/Menu/menu';
import MainSectionTitle from '../components/MainSectionTitle/mainsectiontitle';

const IndexPage = () => (
  <Index>
    <SEO title="Home" />
    <MainSectionTitle />
    <Menu />
    <Button>Call to action</Button>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Index>
);

export default IndexPage;
