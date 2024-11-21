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
  <Layout title="Healthkathon 2.0">
    <Container>
      <Title>
        BPJS Kesehatan Healthkathon 2.0 <Badge>2023</Badge>
      </Title>
      <P> 
        I led a team of three in a national competition to create 
        a Power BI dashboard analyzing a massive dataset, 
        securing a top-5 national ranking. As the team leader, 
        I started by organizing our workflow, assigning tasks 
        based on each member’s strengths, including data 
        extraction and cleaning, model development, 
        and dashboard design.
      </P>
      <P>
      I ensured clear communication through regular 
        updates and collaborative problem-solving sessions, 
        especially when tackling challenges with data 
        inconsistencies and optimization. By emphasizing 
        efficiency and creativity, we delivered a polished 
        dashboard that highlighted actionable insights, 
        impressing the judges with both its technical depth 
        and usability.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Dekstop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Power BI, Microsoft Excel, SQL</span>
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

      <WorkImage src="/images/works/hk.png" alt="healthkathon" /> 
      <WorkImage src="/images/works/hk-cert.png" alt="healthkathon" /> 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
