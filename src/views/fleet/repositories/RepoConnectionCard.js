import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, CardActionArea, Grid, Link, Menu, MenuItem, Skeleton, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import { IconBrandBitbucket, IconBrandGithub } from '@tabler/icons';
import { IconBrandGit, IconHammer, IconRocket } from '@tabler/icons';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const RepoConnectionCard = ({ isLoading, data }) => {
  const theme = useTheme();

  const getIcon = (provider) => {
    switch (provider.toLowerCase()) {
      case 'github':
        return <GitHubIcon fontSize="inherit" />;
      case 'bitbucket':
        return <IconBrandBitbucket fontSize="inherit" />;
      default:
        return <IconBrandGit fontSize="inherit" />;
    }
  };

  return (
    <>
      {isLoading ? (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Skeleton width={64} />
                  </Grid>
                  <Grid item>
                    <Skeleton width={64} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <Skeleton width={128} />
                </Grid>
              </Grid>
              <Grid item>
                <Skeleton />
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      ) : (
        <CardWrapper border={false} content={false}>
          <CardActionArea onClick={() => window.open(data.url)}>
            <Box sx={{ p: 2.25 }}>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.largeAvatar,
                          backgroundColor: theme.palette.secondary[200],
                          mt: 1
                        }}
                      >
                        {getIcon(data?.provider)}
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.mediumAvatar,
                          backgroundColor: theme.palette.secondary.dark,
                          color: theme.palette.secondary[200],
                          zIndex: 1,
                          width: 64,
                          height: 64
                        }}
                        aria-controls="menu-earning-card"
                        aria-haspopup="true"
                        src={data.avatar_url}
                      ></Avatar>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Link target={'_blank'} href={data.url} rel={'noreferrer'} underline={'hover'}>
                        <Typography
                          sx={{ color: theme.palette.secondary.light, fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}
                        >
                          {data.url}
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 1.25 }}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.secondary[200]
                    }}
                  >
                    {data?.provider?.toUpperCase() || <Skeleton />}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardActionArea>
        </CardWrapper>
      )}
    </>
  );
};

RepoConnectionCard.propTypes = {
  isLoading: PropTypes.bool
};

export default RepoConnectionCard;
