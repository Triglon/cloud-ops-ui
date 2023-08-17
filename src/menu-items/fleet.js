// assets
import { IconCloudComputing, IconTestPipe, IconBrandGit } from '@tabler/icons';
import { AppRoutes } from '../routes/routes';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const fleet = {
  id: 'fleet',
  title: 'Fleet',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Overview',
      type: 'item',
      url: AppRoutes.overview,
      icon: IconCloudComputing,
      breadcrumbs: false
    },
    {
      id: 'services',
      title: 'Services',
      type: 'item',
      url: AppRoutes.services,
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
    },
    {
      id: 'repositories',
      title: 'Repository',
      type: 'item',
      url: AppRoutes.repositories,
      icon: IconBrandGit,
      breadcrumbs: false
    }
  ]
};

export default fleet;
