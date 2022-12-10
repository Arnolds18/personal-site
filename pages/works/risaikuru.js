import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Risaikuru">
    <Container>
      <Title>
        Risaikuru <Badge>2022</Badge>
      </Title>
      <P>
        A website for classifying waste using an image 
        classification that is trained through a deep learning model.
        This project was used to take part in the 
        Google Developer Student Club (GDSC) Hackfest 2022
        and managed to become the Top 10 best projects.
        The next step is submitting this project to the Solution 
        Challenge hosted by the Google Developer Student Club
      </P>
      <List ml={4} my={4}>
      <Meta>Website</Meta>
          <Link href="https://risaikuru.vercel.app/">
            Risaikuru <ExternalLinkIcon mx="2px" />
          </Link>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Deep Learning, TensorFlow</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://youtu.be/nropb9sKjUk?t=5442">
            Showcase Presentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage
        src="/images/works/the-four-painters_eyecatch.jpg"
        alt="walknote"
      />
      <WorkImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
      <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
