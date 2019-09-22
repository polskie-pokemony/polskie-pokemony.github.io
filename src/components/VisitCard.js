import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VCButtons from './VCButtons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  content: {
    padding: theme.spacing(2, 3),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  text: {
    padding: theme.spacing(3,0,1,0),
  },
}));

export default ({ data }) => {
  const post = data.file;
  const classes = useStyles();
  const entryName = post.fields.slug.replace(/\//g,'')
  const findLogo = data.logo.edges.filter(el => {
    return el.node.name === `logo-${entryName}`
  })
  const logo = findLogo.length !== 0 ? findLogo[0].node.publicURL : 'https://source.unsplash.com/random/'
  return (
    <Layout>
      <Container maxWidth='md' spacing='4' className={classes.root}>
        <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={9} className={classes.root}>
            <Box className={classes.content}>
            <Typography component="h2" variant='h4'>{post.frontmatter.title}</Typography>
            <div className={classes.text} dangerouslySetInnerHTML={{ __html: post.html }} />
            <VCButtons pageInfo={post} />
            </Box>
          </Grid>
          <Grid item md={3}>
            <img src={logo} alt={`Logo ${post.frontmatter.title}`} />
          </Grid>
        </Grid>
        </Paper>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    file: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        discordinvite
        category
        forumlink
        wwwlink
      }
      fields {
        slug
      }
    }
    logo: allFile(filter: {
      extension: {eq: "png"}
      name: {regex: "^logo-/"}
    }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`