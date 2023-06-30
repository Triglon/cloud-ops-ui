import { useEffect, useState } from 'react';

// material-ui
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import PipelineStageCard from './PipelineStageCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import PipelineEnvCard from './PipelineEnvCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@mui/material/Typography';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const status = [
  {
    value: 'api',
    label: 'Api'
  },
  {
    value: 'ui',
    label: 'Web UI'
  }
];

const Pipeline = () => {
  const [value, setValue] = useState('api');

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const environments = [
    { name: 'dev', stages: ['build', 'deploy'] },
    { name: 'staging', stages: ['source', 'build', 'deploy'] },
    { name: 'production', stages: ['source', 'build', 'deploy'] }
  ];

  const envs = environments.map((env) => env.name);
  const stages = environments.map((env) => env.stages);

  // Add empty strings to stages with fewer items
  const maxStageCount = Math.max(...stages.map((stage) => stage.length));
  stages.forEach((stage) => {
    while (stage.length < maxStageCount) {
      stage.push('');
    }
  });
  const numColumns = Math.ceil(12 / envs.length); // Calculate number of columns

  console.log(envs);
  console.log(stages);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} justifyContent="flex-end">
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Service"
                onChange={(e) => setValue(e.target.value)}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          {envs.map((env, index) => (
            <Grid item xs={numColumns} key={env}>
              <PipelineEnvCard isLoading={isLoading} />

              {stages[index].map((stage) => (
                <p key={stage}>
                  <PipelineStageCard isLoading={isLoading} />
                </p>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/*<Grid item xs={12}>*/}
      {/*  <Grid container spacing={gridSpacing}>*/}
      {/*    <Grid item xs={12} md={8}>*/}
      {/*      <TotalGrowthBarChart isLoading={isLoading} />*/}
      {/*    </Grid>*/}
      {/*    <Grid item xs={12} md={4}>*/}
      {/*      <PopularCard isLoading={isLoading} />*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Grid>
  );
};

export default Pipeline;
