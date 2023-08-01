import { useEffect, useState } from 'react';

// material-ui
import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Skeleton, TextField } from '@mui/material';

// project imports
import PipelineStageCard from './PipelineStageCard';
import PipelineEnvCard from './PipelineEnvCard';
import { gridSpacing } from 'store/constant';
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
  const [numColumns, setNumColumns] = useState(4);

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
        setEnvironments(service.environments);
        if (service.environments.length) {
          setNumColumns(Math.ceil(12 / service.environments.length));
        } else {
          setNumColumns(4);
        }
      }
    }
  };

  const getSkeleton = () => {
    return (
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <PipelineEnvCard isLoading={isLoading} />

            <Box sx={{ pt: 2 }}>
              <PipelineStageCard isLoading={isLoading} />
            </Box>
            <Box sx={{ pt: 2 }}>
              <PipelineStageCard isLoading={isLoading} />
            </Box>
            <Box sx={{ pt: 2 }}>
              <PipelineStageCard isLoading={isLoading} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const getDisplay = () => {
    if (isLoading) {
      return getSkeleton();
    }
    return (
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          {environments.map((env, index) => (
            <Grid item xs={numColumns} key={env.name}>
              <PipelineEnvCard isLoading={isLoading} data={env} />

              {env?.pipeline?.stages?.map((stage) => (
                <Box key={stage} sx={{ pt: 2 }}>
                  <PipelineStageCard isLoading={isLoading} data={stage} />
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };
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
      {getDisplay()}
    </Grid>
  );
};

export default Pipeline;
