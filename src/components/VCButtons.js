import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import EditIcon from '@material-ui/icons/Edit';
import Forum from '@material-ui/icons/Forum';
import config from '../config';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const DiscordButton = ( data ) => {
  if (data.categories.includes('Discord') && data.pageInfo.frontmatter.discordinvite) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.discordinvite} target={'_blank'} className={data.classes.button}>
        Dołącz
        <FontAwesomeIcon icon={faDiscord} className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const ForumButton = ( data ) => {
  if (data.categories.includes('Forum') && data.pageInfo.frontmatter.forumlink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.forumlink} target={'_blank'} className={data.classes.button}>
        Forum
        <Forum />
      </Button>
    );
  } else {
    return (null);
  }
}

const EditButton = ( data ) => {
  return (
    <Button variant="outlined" color="secondary" href={data.ghLink} className={data.classes.button}>
      Edytuj
      <EditIcon className={data.classes.rightIcon} />
    </Button>
  );
}

const VCButtons = ({ pageInfo }) => {
  const classes = useStyles();
  const entryName = pageInfo.fields.slug.replace(/\//g,'')
  const githubEditLink = `${config.githubRepo}/edit/master/src/pages/data/${entryName}.md`;
  const entryCategories = pageInfo.frontmatter.category.split(',');

  return (
  <React.Fragment>
    <DiscordButton categories={entryCategories} pageInfo={pageInfo} classes={classes} />
    <ForumButton categories={entryCategories} pageInfo={pageInfo} classes={classes} />
    <EditButton ghLink={githubEditLink} classes={classes}/> 
  </React.Fragment>
  );
}

export default VCButtons;