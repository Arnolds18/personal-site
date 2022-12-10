import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Redmi">
    <Container>
      <Title>
        Redmi Fuel Band Tracker EDA <Badge>2022</Badge>
      </Title>
      <P>
      This project focuses on the application of 
      Exploratory Dataset Analysis (EDA). It starts 
      with searching for datasets, data preprocessing, 
      and data visualization. In conducting data 
      visualization, the modules used are 
      Matplotlib and Seaborn. 
      You can download the dataset from <Link href="https://www.kaggle.com/tanisha1416/my-redmi-fuel-band-record-tracker-fitbit-dataset">
            Kaggle </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
        <Meta>Website</Meta>
          <Link href="https://github.com/Arnolds18/Redmi-Fuel-Band-Record-Tracker">
            Source Code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <Meta>Stack</Meta>
          <span>Python, Numpy, Pandas, Matplotlib, Seaborn</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/redmi-fuel-band-eda-01.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
