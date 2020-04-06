import React from 'react';

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

const IndexPage = () => {
  const slides = [
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    },
  ];

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
        <BgCurve />
      </MainSection>

      <Section title="o que fazemos">
        <AnimatedSlider color="#fff" textcolor="#131313">
          {slides.map((slide, index) => <div key={index}>
            <div>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
            <div>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
          </div>)}
        </AnimatedSlider>
        <BgYellowBlack/>
      </Section>

      <Section title="produtos">
        <AnimatedSlider color="#fff" textcolor="#fff">
          {slides.map((slide, index) => <div key={index}>
            <div>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
            <div>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
          </div>)}
        </AnimatedSlider>
        <BgGrayscale/>
      </Section>

      <Section title="clientes">
        <AnimatedSlider color="#131313" textcolor="#fff">
          {slides.map((slide, index) => <div key={index}>
            <div>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
            <div>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
          </div>)}
        </AnimatedSlider>
        <BgYellowGray/>
      </Section>

    </Index>
  );
};
export default IndexPage;
