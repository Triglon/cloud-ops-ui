// assets
import { IconCloudComputing, IconTestPipe } from '@tabler/icons';
import { AppRoutes } from '../routes/routes';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const fleet = {
  id: 'fleet',
  title: 'Fleet',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Fleet',
      type: 'item',
      url: AppRoutes.fleet,
      icon: IconCloudComputing,
      breadcrumbs: false
    },
    {
      id: 'pipeline',
      title: 'Pipeline',
      type: 'item',
      url: AppRoutes.pipeline,
      icon: IconTestPipe,
      breadcrumbs: false
    }
  ]
};

export default fleet;
