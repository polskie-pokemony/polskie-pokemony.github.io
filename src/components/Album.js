import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import AlbumSchema from './AlbumSchema';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: '100%',
    'background-size': 'contain',
    marginTop: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  'card-show': {
    display: 'block',
  },
  'card-hide': {
    display: 'none'
  },
  'filter-bar': {
    padding: theme.spacing(2,4)
  }
}));

export default function Album() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
  {
    file: allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
            shortdesc
          }
        }
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
`)

  return (
    <Layout>
      <AlbumSchema classes={classes} data={data.file} logo={data.logo} />
    </Layout>
  );
}
