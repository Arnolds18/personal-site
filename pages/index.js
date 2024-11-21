import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoGoogle, IoMail, IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Data and Software Development Enthusiast
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arnold Sidiprasetija
          </Heading>
          <p>
            Associate Data Product Manager
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="120px"
            h="120px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/arnold.jpg"
              alt="Profile image"
              borderRadius="full"
              width="120%"
              height="120%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        Arnold graduated with a Bachelor of Computer Engineering from the Sepuluh Nopember Institute of Technology and is now an Associate Data Product Manager at <Link href="https://www.linkedin.com/posts/sekolahmu_about-sekolahmu-and-pt-semesta-integrasi-activity-7060103474704773120-5zqp" isExternal>PT Semesta Integrasi Digital</Link>. His work focuses on developing data-driven products such as dashboards, AI solutions, and other innovations.
        During his studies, Arnold actively enhanced his skills by joining prestigious programs like Bangkit Academy by Google, GoTo, and Traveloka, where he specialized in Machine Learning and collaborated with Indosat Ooredoo Hutchison on a capstone project. He also participated in the Apple Developer Academy @ UC, focusing on iOS development, where he gained a year of experience in building applications within the Apple ecosystem. These experiences laid a strong foundation for his current role, combining technical expertise with a passion for impactful product development.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="https://drive.google.com/file/d/1N2WURB4RboOBm009oHlCFL59d1gqGhZg/view?usp=sharing" target="_blank" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              See My Resume
            </Button>
          </Link>
        </Box>
        
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Connect With Me
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:arnoldsidiprasetija@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                arnoldsidiprasetija@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://wa.me/6285731020346" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                +62-857-3102-0346
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/arnoldprasetija" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @arnoldprasetija
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/arnoldprasetija18/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @arnoldprasetija18
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/arnoldprasetija/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Arnold Sidiprasetija
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
