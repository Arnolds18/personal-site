import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Moneh">
    <Container>
      <Title>
        Moneh <Badge>2022</Badge>
      </Title>
      <P>
      An iOS app made specifically for college students, 
      that helps monthly money management in an easy way.
      </P>
      <UnorderedList my={4}>
        <ListItem>For college students</ListItem>
        <ListItem>Requiring regular budgeting and record keeping</ListItem>
        <ListItem>Dividing the budget into certain segments, tracking with attractive visuals, accompanied by widgets and reminders to facilitate regular recording</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            SwiftUI, Widget
          </span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>
            iOS
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/Arnolds18/mimoni">
            Moneh<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/moneh-01.png" alt="moneh" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      <WorkImage src="/images/works/moneh-02.png" alt="moneh" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
