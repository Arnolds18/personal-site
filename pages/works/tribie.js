import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tribie">
    <Container>
      <Title>
        Tribie <Badge>2022</Badge>
      </Title>
      <P>A native iOS App for traveller communities 
        especially JCI Adventure that enables them 
        to track their expenses easily and effortlessly, 
        on the go to make sure they can stay focused 
        on the real priority of adventure, to have fun 
        and explore whilst managing travel expenses 
        efficiently, transparent, and seamlessly by using 
        Apple Watch, Speech to Text, OCR, and simple UI.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, watchOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SwiftUI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tribie-02.png" alt="tribie" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/tribie-login.png" alt="tribie" />
        <WorkImage src="/images/works/tribie-home.png" alt="tribie" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
