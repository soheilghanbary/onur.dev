import { Grid, Heading, Text, Stack } from '@chakra-ui/core'

// --- Components
import { BlogPost, Layout } from 'components'

// --- Other
import { frontMatter as blogPosts } from './**/*.mdx' // Thanks to babel-plugin-import-glob-array

const Home = () => {
  const sortedBlogPosts = blogPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return (
    <Layout>
      <Stack spacing={8}>
        <Stack spacing={8}>
          <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-1}>
            {'Hey, I’m Onur Şuyalçınkaya'}
          </Heading>
          <Text>
            {`I've been writing online since 2018, mostly about web development, tips and tricks.
                In total, I've written ${blogPosts.length} articles on this site.`}
          </Text>
        </Stack>
        <Grid gridGap={6}>
          {sortedBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Grid>
      </Stack>
    </Layout>
  )
}

export default Home
