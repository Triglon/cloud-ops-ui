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
import { useSelector } from 'react-redux';
import CoreApi from '../../../api/CoreApi';
import { Box } from '@mui/system';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Pipeline = () => {
  const [isLoading, setLoading] = useState(true);

  const project = useSelector((state) => state.project);
  const [projectDetails, setProjectDetails] = useState({});
  const [services, setServices] = useState([{}]);

  const [currentService, setCurrentService] = useState({ id: null });
  const [currentServiceId, setCurrentServiceId] = useState('');

  const [environments, setEnvironments] = useState([
    { name: 'dev', stages: [{ stage: 'source' }, { stage: 'build' }, { stage: 'deploy' }] },
    { name: 'staging', stages: [{ stage: 'source' }, { stage: 'build' }, { stage: 'deploy' }] },
    { name: 'production', stages: [{ stage: 'source' }, { stage: 'build' }, { stage: 'deploy' }] }
  ]);
  const [stages, setStages] = useState([]);
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    if (project.initialized && project.data.id) {
      CoreApi.getProjectDetails(project.data.id).then((r) => {
        const defaultService = r.data.services[0];
        setProjectDetails(r.data);
        setCurrentServiceId(defaultService.id);
        setServices(r.data.services);
        setLoading(false);
      });
    }
  }, [project.initialized]);

  useEffect(() => {
    if (project.initialized && project.data.id) {
      setActiveService(currentServiceId);
    }
  }, [currentServiceId]);

  const setActiveService = (serviceId) => {
    for (const service of services) {
      if (serviceId === service.id) {
        setCurrentServiceId(serviceId);
        const stages = environments.map((env) => env.stages);
        setStages(stages);

        setEnvironments(service.environments);
        setNumColumns(Math.ceil(12 / service.environments.length));
        console.log('match');
      }
    }
  };

  // // Add empty strings to stages with fewer items
  // const maxStageCount = Math.max(...stages.map((stage) => stage.length));
  // stages.forEach((stage) => {
  //   while (stage.length < maxStageCount) {
  //     stage.push('');
  //   }
  // });

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
                value={currentServiceId}
                label="Service"
                onChange={(e) => setCurrentServiceId(e.target.value)}
              >
                {services.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          {environments.map((env, index) => (
            <Grid item xs={numColumns} key={env.name}>
              <PipelineEnvCard isLoading={isLoading} data={env} />

              {stages[index]?.map((stage) => (
                <Box key={stage} sx={{ pt: 2 }}>
                  <PipelineStageCard isLoading={isLoading} data={stage} />
                </Box>
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
