import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faFacebook, faFacebookMessenger, faTwitter } from '@fortawesome/free-brands-svg-icons';
import EditIcon from '@material-ui/icons/Edit';
import WebIcon from '@material-ui/icons/Web';
import GroupIcon from '@material-ui/icons/Group';
import Forum from '@material-ui/icons/Forum';
import config from '../config';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
    width: '0.875em',
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const WwwButton = ( data ) => {
  if (data.categories.includes('WWW') && data.pageInfo.frontmatter.wwwlink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.wwwlink} target={'_blank'} className={data.classes.button}>
        WWW
        <WebIcon className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const DiscordButton = ( data ) => {
  if (data.categories.includes('Discord') && data.pageInfo.frontmatter.discordinvite) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.discordinvite} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
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
        <Forum className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const YoutubeButton = ( data ) => {
  if (data.categories.includes('Youtube') && data.pageInfo.frontmatter.ytlink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.ytlink} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
        YouTube
        <FontAwesomeIcon icon={faYoutube} className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const FBFanpageButton = ( data ) => {
  if (data.categories.includes('Fanpage') && data.pageInfo.frontmatter.fanpagelink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.fanpagelink} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
        Fanpage
        <FontAwesomeIcon icon={faFacebook} className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const FBGroupButton = ( data ) => {
  if (data.categories.includes('Grupa') && data.pageInfo.frontmatter.fbgrouplink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.fbgrouplink} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
        Grupa
        <GroupIcon className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const MessengerButton = ( data ) => {
  if (data.categories.includes('Messenger') && data.pageInfo.frontmatter.messengerlink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.messengerlink} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
        Konwersacja
        <FontAwesomeIcon icon={faFacebookMessenger} className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const TwitterButton = ( data ) => {
  if (data.categories.includes('Twitter') && data.pageInfo.frontmatter.twitterlink) {
    return (
      <Button variant="contained" color="primary" href={data.pageInfo.frontmatter.twitterlink} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
        Twitter
        <FontAwesomeIcon icon={faTwitter} className={data.classes.rightIcon} />
      </Button>
    );
  } else {
    return (null);
  }
}

const EditButton = ( data ) => {
  return (
    <Button variant="outlined" color="secondary" href={data.ghLink} target={'_blank'} rel={'nofollow'} className={data.classes.button}>
      Edytuj
      <EditIcon className={data.classes.rightIcon} />
    </Button>
  );
}

const SortedButtons = ( data ) => (
  <>
    {
      data.categories.map(cat => {
        switch (cat) {
          case 'WWW':
            return (<WwwButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'Discord':
           return (<DiscordButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'Forum':
            return (<ForumButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'YouTube':
            return (<YoutubeButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'Fanpage':
            return (<FBFanpageButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'Grupa':
            return (<FBGroupButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'Messenger':
            return (<MessengerButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          case 'Twitter':
            return (<TwitterButton categories={data.categories} pageInfo={data.pageInfo} classes={data.classes} />);
          default:
            return null;
        }
      })
      }
  </>
)

const VCButtons = ({ pageInfo }) => {
  const classes = useStyles();
  const entryName = pageInfo.fields.slug.replace(/\//g,'')
  const githubEditLink = `${config.githubRepo}/edit/dev/src/pages/data/${entryName}.md`;
  const entryCategories = pageInfo.frontmatter.category.split(',');

  return (
  <React.Fragment>
    <SortedButtons categories={entryCategories} pageInfo={pageInfo} classes={classes} />
    <EditButton ghLink={githubEditLink} classes={classes}/> 
  </React.Fragment>
  );
}

export default VCButtons;