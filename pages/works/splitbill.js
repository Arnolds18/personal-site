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
  <Layout title="Split Bill">
    <Container>
      <Title>
        Split Bill <Badge>2022</Badge>
      </Title>
      <P>
      Split billing is the division of a 
      bill for service into two or more parts. 
      The case that often happens is that people 
      go out to eat at a restaurant with other 
      people and they want to pay the bill for 
      each person. Tax is one of the problems, 
      the distribution becomes unequal.
      </P>
      <P>
      Split Bill is a Native iOS App for those who 
      often go out to eat with their friends that 
      need help to calculate how much to pay each 
      persons by using split bill calculation.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            SwiftUI
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
          <Link href="https://github.com/Arnolds18/SplitBill">
            Split Bill<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/splitbill-home.png" alt="splitbill" />
        <WorkImage src="/images/works/splitbilldark.png" alt="splitbill" />
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
