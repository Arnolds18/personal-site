import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Replasc">
    <Container>
      <Title>
        Replasc <Badge>2022</Badge>
      </Title>
      <P> 
        In this Company based Capstone Project of Bangkit Academy 2022
        collaborating with Indosat Ooredoo Hutchison, my team managed to make an application 
        with the theme of plastic waste and carbon, which
        is Replasc. Due to I am a Machine Learning Cohort, 
        I am in charge of making machine learning model
        for classifying plastic waste in this project.
      </P>
      <P>
        Replasc is an Android app to increase public awareness 
            about plastic waste and decreasing 
            gas emission. 
      </P>
      <UnorderedList my={4}>
        <ListItem>Plastic waste classification into three classes (PET, HDPE, and other)</ListItem>
        <ListItem>Point system for collected plastic waste</ListItem>
        <ListItem>Maps to drop the plastic waste at the collection booth</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>ML Stack</Meta>
          <span>Python, TensorFlow, Transfer Learning</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Arnolds18/C22-CE01">
            C22-CE01<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
  {/* <Link
    className="link-appstore"
    href="https://play.google.com/store/apps/details?id=com.replasc.app"
    target="_blank"
  >
    <Image
      maxW={240}
      src="/images/works/googleplay.png"
      className="image-appstore"
      alt="Get it on Google Play"
    />
  </Link> */}
</Box>

      <WorkImage src="/images/works/replasc-01.png" alt="replasc" /> 
      <WorkImage src="/images/works/replasc-cert.png" alt="replasc" /> 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
