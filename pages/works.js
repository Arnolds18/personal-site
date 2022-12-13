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

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Data | Machine Learning
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <WorkGridItem id="replasc" thumbnail={thumbReplasc} title="Replasc">
            An app to increase public awareness 
            about plastic waste and decreasing 
            gas emission.
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem
            id="risaikuru"
            title="Risaikuru"
            thumbnail={thumbRisaikuru}
          >
            Deep learning model for trash classification website
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem id="btcforecasting" title="Cryptocurrency Forecasting" thumbnail={thumbBtcForecasting}>
          A project of forecasting technique using FbProphet
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="redmi"
            title="Redmi Fuel Band Tracker"
            thumbnail={thumbRedMi}
          >
            Exploratory Data Analysis Project using Python
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          iOS App
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="moneh" thumbnail={thumbMoneh} title="Moneh">
          A money management app specially for collage students
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="tribie"
            thumbnail={thumbTribie}
            title="Tribie"
          >
            A tracking expense app for traveller community
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="purru" thumbnail={thumbPurru} title="Purru">
            An app for people with sleeping trouble
            caused by racing thoughts
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
