import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AlbumCard from './AlbumCard';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class AlbumSchema extends Component {
  constructor(props) {
    super(props);
    this.state = {show: "all"};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState(prevState => {
      return ({
        show: e.target.value,
      })});
  }
  
  render() {
    console.log(this.props)
    const classes = this.props.classes;
    const data = this.props.data;
    const allCategories = data.edges.flatMap(card => {
      return (card.node.frontmatter.category.split(','));
    });
    const allUniqueCategories = [...new Set(allCategories)];
      
    return (
      <React.Fragment>
        <Container maxWidth="md" className={classes['filter-bar']}>
          <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="filter-type">Kategoria</InputLabel>
            <Select
              value={this.state.show}
              onChange={this.handleClick}
              inputProps={{
                name: 'type',
                id: 'filter-type',
              }}
            >
              <MenuItem value={"all"}>Wszystkie</MenuItem>
              {allUniqueCategories.map(category => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          </form>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.edges.map(card => (
                    <AlbumCard card={card} classes={classes} show={this.state.show} logo={this.props.logo} />
            ))}
          </Grid>
        </Container>
        </React.Fragment>
    );
  }
}

export default AlbumSchema;