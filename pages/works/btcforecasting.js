import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cryptocurrency Forecasting">
    <Container>
      <Title>
        Cryptocurrency Forecasting <Badge>2022</Badge>
      </Title>
      <P>
        A project of learning outcomes regarding forecasting
        techniques that use the FbProphet module. Prophet 
        is a procedure for forecasting time series data 
        based on an additive model 
        where non-linear trends are fit with yearly, 
        weekly, and daily seasonality, plus holiday 
        effects. It works best with time series that 
        have strong seasonal effects and several 
        seasons of historical data. FbProphet is 
        a powerful time series analysis package 
        released by Core Data Science Team at Facebook. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Arnolds18/FacebookProphet">
            Source Code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Matplotlib, YFinance, FbProphet</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/btc-forecasting-01.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
