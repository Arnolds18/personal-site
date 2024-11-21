import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBtcForecasting from '../public/images/works/btcforecasting.png'
import thumbRedMi from '../public/images/works/redmi-fuel-band-eda.png'
import thumbRisaikuru from '../public/images/works/risaikuru.png'
import thumbReplasc from '../public/images/works/replasc.png'
import thumbMoneh from '../public/images/works/moneh-02.png'
import thumbTribie from '../public/images/works/tribie-01.png'
import thumbPurru from '../public/images/works/purru.png'
import thumbSplit from '../public/images/works/splitbill.png'
import thumbHk from '../public/images/works/hk-thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Data | Machine Learning
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="healthkathon" thumbnail={thumbHk} title="Healthkathon 2.0">
            Dashboard Power BI for Data Analytics and Visualization Competition
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="replasc" thumbnail={thumbReplasc} title="Replasc">
            An app to increase public awareness 
            about plastic waste and decreasing 
            gas emission.~
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
              id="risaikuru"
              title="Risaikuru"
              thumbnail={thumbRisaikuru}
            >
              Deep learning model for trash classification website
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem id="btcforecasting" title="Cryptocurrency Forecasting" thumbnail={thumbBtcForecasting}>
            A project of forecasting technique using FbProphet
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
              id="redmi"
              title="Redmi Fuel Band Tracker"
              thumbnail={thumbRedMi}
            >
              Exploratory Data Analysis Project using Python
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.6}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          iOS App
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
          <WorkGridItem id="purru" thumbnail={thumbPurru} title="Purru">
            An app for people with sleeping trouble
            caused by racing thoughts
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem
              id="tribie"
              thumbnail={thumbTribie}
              title="Tribie"
            >
              A tracking expense app for traveller community
          </WorkGridItem>
        </Section>
       
        <Section delay={0.9}>
          <WorkGridItem id="moneh" thumbnail={thumbMoneh} title="Moneh">
            A money management app specially for college students
          </WorkGridItem>
        </Section>

        <Section delay={1.0}>
          <WorkGridItem id="splitbill" thumbnail={thumbSplit} title="Split Bill">
            Split bill calculator
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'