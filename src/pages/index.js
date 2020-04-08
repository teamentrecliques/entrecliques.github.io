import React from 'react';
import * as Data from '../data/slides';

import Index from '../components/Layout';
import SEO from '../components/seo';
import Button from '../components/Button/button';
import Menu from '../components/Menu/menu';
import MainSectionTitle from '../components/MainSection/MainSectionTitle/mainsectiontitle';
import MainSectionText from '../components/MainSection/MainSectionText/mainsectiontext';
import MainSection from '../components/MainSection/mainsection';
import BgCurve from '../components/MainSection/BgCurve/bgcurve';
import Section from '../components/Section/section';
import AnimatedSlider from '../components/AnimatedSlider/animatedslider';
import BgYellowBlack from '../components/Section/Backgrounds/BgYellowBlack/bgyellowblack';
import BgGrayscale from '../components/Section/Backgrounds/BgGrayscale/bggrayscale';
import BgYellowGray from '../components/Section/Backgrounds/BgYellowGray/bgyellowgray';
import IllustrationContent from '../components/AnimatedSlider/IllustrationContent/illustrationcontent';
import TextContent from '../components/Section/TextContent/textcontent';
import { DefaultTheme } from '../styles';
import Card from '../components/AnimatedSlider/Card/card';

import mainImage from '../images/main-img.svg';

const IndexPage = () => {
  return (
    <Index>
      <SEO title="Home" />
      <Menu />

      <MainSection type="main">
        <div>
          <MainSectionTitle />
          <MainSectionText />
          <Button>Call to action</Button>
        </div>
        <img src={mainImage} alt=""/>
        <BgCurve />
      </MainSection>

      <Section title="o que fazemos">
        <AnimatedSlider color={DefaultTheme.secondary.hex()} data={Data.whatWeDo}>
          {Data.whatWeDo.map((slide, index) =>
            <div key={index}>
              <TextContent
                title={slide.title}
                bodycolor={DefaultTheme.dark.hex()}
                titlecolor={DefaultTheme.dark.hex()}
                logo=""
              >
                {slide.description}
              </TextContent>
              <IllustrationContent image={slide.image} />
            </div>)}
        </AnimatedSlider>
        <BgYellowBlack/>
      </Section>

      <Section title="produtos">
        <AnimatedSlider color={DefaultTheme.secondary.hex()} data={Data.products}>
          {Data.products.map((slide, index) => <div key={index}>
              <TextContent
                title={slide.title}
                bodycolor={DefaultTheme.primary.hex()}
                titlecolor={DefaultTheme.secondary.hex()}
                logo={slide.logo}
              >
                {slide.description}
              </TextContent>
            <div>
              <Card image={slide.image} data={slide.card} />
            </div>
          </div>)}
        </AnimatedSlider>
        <BgGrayscale />
      </Section>

    </Index>
  );
};

export default IndexPage;
