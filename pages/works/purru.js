import {
  Box,
  Container,
  Badge,
  Image,
  Link,
  List,
  ListItem,
  AspectRatio,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Purru">
    <Container>
      <Title>
        Purru <Badge>2022</Badge>
      </Title>
      <P>
      Purru is A native iOS App for people with 
      sleeping trouble caused by racing thoughts 
      that helps them calm their 
      mind by using interactive guided imagery 
      and relaxing sounds.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SwiftUI, SceneKit</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://purru.netlify.app">
            Purru <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://apps.apple.com/id/app/purru/id6444001664"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/OyLU-bdjpOs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/purru-03.png" alt="Purru" />
      <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/purru-home.png" alt="Purru" />
        <WorkImage src="/images/works/purru-04.png" alt="Purru" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
