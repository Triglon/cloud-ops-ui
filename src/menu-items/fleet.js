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
      url: '/dashboard/default',
      icon: IconCloudComputing,
      breadcrumbs: false
    },
    {
      id: 'pipeline',
      title: 'Pipeline',
      type: 'item',
      url: '/dashboard/default',
      icon: IconTestPipe,
      breadcrumbs: false
    }
  ]
};

export default fleet;
