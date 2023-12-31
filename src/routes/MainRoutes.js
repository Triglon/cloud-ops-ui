import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Pipeline from '../views/fleet/pipeline';
import Services from '../views/fleet/services';
import { RepositoriesView } from '../views/fleet/repositories';
import { RepoConnectionSuccessView } from '../views/fleet/repositories/repo-connection-success';
import DeploymentDiagram from '../views/fleet/overview';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'fleet',
      children: [
        {
          path: 'overview',
          element: <DeploymentDiagram />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'pipeline',
          element: <Pipeline />
        },
        {
          path: 'repositories',
          children: [
            {
              path: '',
              element: <RepositoriesView />
            },
            {
              path: 'repo-connection-success',
              element: <RepoConnectionSuccessView />
            }
          ]
          // element: <RepositoriesView />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
