import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Skeleton, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IconBrandGit, IconHammer, IconRocket } from '@tabler/icons';
import BuildIcon from '@mui/icons-material/Build';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
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
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const PipelineStageCard = ({ isLoading, data }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  const getIcon = (stage) => {
    switch (stage.toLowerCase()) {
      case 'source':
        return <IconBrandGit fontSize="inherit" />;
      case 'build':
        return <IconHammer fontSize="inherit" />;
      case 'deploy':
        return <IconRocket fontSize="inherit" />;
      default:
        return <IconBrandGit fontSize="inherit" />;
    }
  };

  const getSkeleton = () => {
    return (
      <CardWrapper border={false} content={false}>
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Skeleton width={64} height={64} />
                </Grid>
                <Grid item>
                  <Button disableElevation variant={!timeValue ? 'contained' : 'text'} size="small" sx={{ color: 'inherit' }}>
                    <Skeleton width={64} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Grid item xs={6}>
                  <Grid>
                    <Grid item>
                      <Skeleton width={128} />
                    </Grid>
                    <Grid item xs={12}>
                      <Skeleton width={64} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardWrapper>
    );
  };
  return (
    <>
      {isLoading ? (
        getSkeleton()
      ) : (
        <CardWrapper border={false} content={false}>
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
                        backgroundColor: theme.palette.primary[800],
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      {getIcon(data?.stage)}
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button disableElevation variant={timeValue ? 'contained' : 'text'} size="small" sx={{ color: 'inherit' }}>
                      <strong>Status: </strong>
                    </Button>
                    <Button disableElevation variant={!timeValue ? 'contained' : 'text'} size="small" sx={{ color: 'inherit' }}>
                      {data?.latest_execution?.status}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>$108</Typography>
                        ) : (
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{data?.stage}</Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            ...theme.typography.smallAvatar,
                            cursor: 'pointer',
                            backgroundColor: theme.palette.primary[200],
                            color: theme.palette.primary.dark
                          }}
                        >
                          <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >
                          Pipeline Stage
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {/*{timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}*/}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

PipelineStageCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PipelineStageCard;
