import React, { Component} from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import config from '../config';

class AlbumCard extends Component {

  constructor(props) {
    super(props);
    this.state = {show: true};
    this.handleClick = this.handleClick.bind(this);
    this.shouldBeDisplayed = this.shouldBeDisplayed.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  shouldBeDisplayed() {
    const node = this.props.card.node;
    const categoryMatch = () => (node.frontmatter.category.split(',').includes(this.props.show) || this.props.show === 'all');
    const query = this.props.search;
    const searchMatch = (node, query) => {
      if(node.html.toLowerCase().includes(query.toLowerCase())
      || node.frontmatter.title.toLowerCase().includes(query.toLowerCase())
      || node.frontmatter.shortdesc.toLowerCase().includes(query.toLowerCase())
      || node.frontmatter.category.toLowerCase().includes(query.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }
    return (searchMatch(node, query) && categoryMatch());
  }
  
  
  render() {
    const card = this.props.card;
    const classes = this.props.classes;
    const entryName = card.node.fields.slug.replace(/\//g,'')

    const findLogo = this.props.logo.edges.filter(el => {
      return el.node.name === `logo-${entryName}`
    })
    const logo = findLogo.length !== 0 ? findLogo[0].node.publicURL : 'https://source.unsplash.com/random/'
    const githubEditLink = `${config.githubRepo}/edit/dev/src/pages/data/${entryName}.md`;
  
    return (
      <Grid item key={card} xs={12} sm={6} md={4} className={`${this.shouldBeDisplayed() ? classes['card-show']: classes['card-hide']}`} onClick={this.handleClick}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={logo || 'https://source.unsplash.com/random'}
            alt={`Logo ${card.node.frontmatter.title}`}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.node.frontmatter.title}
            </Typography>
            <Typography>
              {card.node.frontmatter.shortdesc}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={card.node.fields.slug}>
              <Button size="small" color="primary">
                Zobacz
              </Button>
            </Link>
            <a href={githubEditLink} target={'_blank'}>
              <Button size="small" color="primary">
                Edytuj
              </Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    )
}
}

export default AlbumCard;