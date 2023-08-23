import { awsIcons } from './elements/constants';

export const initialNodes = [
  {
    id: 'elb',
    type: 'ResizableNode',
    data: {
      label: 'Load Balancer'
    },
    position: {
      x: 293,
      y: -154
    },
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      justifyContent: 'center'
    },
    width: 131,
    height: 61
  },
  {
    id: 'ecs-cluster',
    type: 'ResizableNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      justifyContent: 'center'
    },
    data: {
      label: 'Cluster'
    },
    position: {
      x: 300,
      y: 100
    },
    width: 86,
    height: 61
  },
  {
    id: 'ecs-service-web',
    type: 'ResizableNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'top',
      border: '1px solid black',
      justifyContent: 'top',
      width: 542,
      height: 345
    },
    data: {
      label: 'Web Service Tasks'
    },
    position: {
      x: 990.2377497712293,
      y: -118.34678153716868
    },
    width: 542,
    height: 345,
    selected: false,
    positionAbsolute: {
      x: 990.2377497712293,
      y: -118.34678153716868
    },
    dragging: false,
    resizing: false
  },
  {
    id: '5',
    type: 'AWSServiceNode',

    data: {
      label: 'Redis Cache',
      icon: awsIcons.redis
    },
    position: {
      x: 616.1833243025008,
      y: 102.7159207931847
    },
    width: 119,
    height: 61,
    selected: true,
    positionAbsolute: {
      x: 616.1833243025008,
      y: 102.7159207931847
    },
    dragging: true
  },
  {
    id: '6',
    type: 'AWSServiceNode',
    data: {
      label: 'PostgreSQL',
      icon: awsIcons.rds
    },
    position: {
      x: 561.6279720849022,
      y: -455.53740891753546
    },
    width: 102,
    height: 121,
    selected: false,
    positionAbsolute: {
      x: 561.6279720849022,
      y: -455.53740891753546
    },
    dragging: false
  },
  {
    id: '7',
    type: 'ResizableNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      justifyContent: 'center'
    },
    data: {
      label: 'Auto Scaling'
    },
    position: {
      x: 215.4086453192724,
      y: 264.1672966273725
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    width: 120,
    height: 61,
    selected: false,
    positionAbsolute: {
      x: 1205.6463950905018,
      y: 145.8205150902038
    },
    dragging: false
  },
  {
    id: 'ecs-service-web-task-1',
    type: 'AWSServiceNode',
    data: {
      label: 'Task 1',
      icon: awsIcons.fargate
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    position: {
      x: 37.525705596371154,
      y: 96.62501467093269
    },
    width: 102,
    height: 121,
    selected: false,
    positionAbsolute: {
      x: 1029.8199785014122,
      y: -21.721766866235996
    },
    dragging: false
  },
  {
    id: 'ecs-service-web-task-2',
    type: 'AWSServiceNode',
    data: {
      label: 'Task 2',
      icon: awsIcons.fargate
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    position: {
      x: 218.3257967791792,
      y: 98.37931707087697
    },
    width: 102,
    height: 121,
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 1208.5635465504085,
      y: -19.967464466291716
    }
  },
  {
    id: 'ecs-service-web-task-N',
    type: 'AWSServiceNode',
    data: {
      label: 'Task N',
      icon: awsIcons.fargate
    },
    position: {
      x: 391.5202087823493,
      y: 99.49007248105102
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    width: 102,
    height: 121,
    selected: false,
    positionAbsolute: {
      x: 1383.8144816873903,
      y: -18.856709056117666
    },
    dragging: false
  },
  {
    id: 'ecs-service-bg',
    type: 'ResizableNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      justifyContent: 'top',
      width: 534,
      height: 244
    },
    data: {
      label: 'Background Tasks'
    },
    position: {
      x: 992.8524417963419,
      y: 274.0995357041148
    },
    width: 534,
    height: 244,
    selected: false,
    positionAbsolute: {
      x: 992.8524417963419,
      y: 274.0995357041148
    },
    dragging: false,
    resizing: false
  },
  {
    id: 'ecs-service-bg-worker-1',
    type: 'AWSServiceNode',
    data: {
      label: 'Worker 1',
      icon: awsIcons.fargate
    },
    position: {
      x: 32.22250541043593,
      y: 77.03396602030648
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 102,
    height: 121,
    selected: false,
    positionAbsolute: {
      x: 1025.0749472067778,
      y: 351.1335017244213
    },
    dragging: false
  },
  {
    id: 'ecs-service-bg-worker-2',
    type: 'AWSServiceNode',
    data: {
      label: 'Worker 2',
      icon: awsIcons.fargate
    },
    position: {
      x: 403.33921218274133,
      y: 66.39686295995375
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 102,
    height: 121,
    selected: false,
    positionAbsolute: {
      x: 1396.1916539790832,
      y: 340.4963986640686
    },
    dragging: false
  },
  {
    id: 'ecs-service-bg-worker-N',
    type: 'AWSServiceNode',
    data: {
      label: 'Worker N',
      icon: awsIcons.fargate
    },
    position: {
      x: 218.96275913662805,
      y: 74.6701653402281
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 102,
    height: 121,
    selected: false,
    positionAbsolute: {
      x: 1211.81520093297,
      y: 348.7697010443429
    },
    dragging: false
  }
];
