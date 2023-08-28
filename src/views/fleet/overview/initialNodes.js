export const initialNodes = [
  {
    id: 'elb',
    type: 'ResizableNode',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: 'Load Balancer'
    },
    position: {
      x: 201.24555655352026,
      y: -352.2798367337409
    },
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      justifyContent: 'center',
      width: 141,
      height: 183
    },
    width: 141,
    height: 183,
    selected: false,
    positionAbsolute: {
      x: 201.24555655352026,
      y: -352.2798367337409
    },
    dragging: false,
    resizing: false
  },
  {
    id: 'elb-target',
    type: 'ResizableNode',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: 'Load Balancer Target Group'
    },
    position: {
      x: 415.6521591355722,
      y: -291.30261836516615
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
    width: 215,
    height: 61,
    selected: false,
    positionAbsolute: {
      x: 415.6521591355722,
      y: -291.30261836516615
    },
    dragging: false
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
      justifyContent: 'top',
      width: 718,
      height: 831
    },
    data: {
      label: 'ECS Cluster'
    },
    position: {
      x: 728.9400915623339,
      y: -369.4112508085709
    },
    width: 718,
    height: 831,
    selected: false,
    positionAbsolute: {
      x: 728.9400915623339,
      y: -369.4112508085709
    },
    dragging: false,
    resizing: false
  },
  {
    id: 'ecs-service-web',
    type: 'ResizableNode',
    parentNode: 'ecs-cluster',
    sourcePosition: 'right',
    targetPosition: 'left',
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
      x: 87.60724679277564,
      y: 56.08275280951193
    },
    width: 542,
    height: 345,
    selected: false,
    positionAbsolute: {
      x: 814.8538477303844,
      y: -311.6350073743339
    },
    dragging: false,
    resizing: false
  },
  {
    id: '5',
    type: 'AWSServiceNode',
    sourcePosition: 'left',
    targetPosition: 'right',
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
      label: 'Redis Cache',
      icon: 'redis-elastic-cache'
    },
    position: {
      x: 1583.4955200286977,
      y: 64.82159834212553
    },
    width: 119,
    height: 109,
    selected: false,
    positionAbsolute: {
      x: 1583.4955200286977,
      y: 64.82159834212553
    },
    dragging: false
  },
  {
    id: '6',
    type: 'AWSServiceNode',
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
      label: 'PostgreSQL',
      icon: 'rds'
    },
    position: {
      x: 1576.89533322258,
      y: -303.81439735353354
    },
    width: 122,
    height: 141,
    selected: true,
    positionAbsolute: {
      x: 1576.89533322258,
      y: -303.81439735353354
    },
    dragging: true
  },
  {
    id: 'auto-scaling',
    type: 'BiArrowNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px dashed black',
      justifyContent: 'center'
    },
    data: {
      label: 'Auto Scaling'
    },
    position: {
      x: 25.610740046753108,
      y: 269.95584304682274
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    width: 490,
    height: 61,
    selected: false,
    positionAbsolute: {
      x: 842.1580784018627,
      y: -43.372654952236246
    },
    dragging: false
  },
  {
    id: 'ecs-service-web-task-1',
    type: 'AWSServiceNode',
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
      label: 'Task 1',
      icon: 'fargate'
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    position: {
      x: 37.525705596371154,
      y: 96.62501467093269
    },
    width: 122,
    height: 141,
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
      icon: 'fargate'
    },
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px dashed black',
      justifyContent: 'center'
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    position: {
      x: 218.3257967791792,
      y: 98.37931707087697
    },
    width: 122,
    height: 141,
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
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px dashed black',
      justifyContent: 'center'
    },
    data: {
      label: 'Task N',
      icon: 'fargate'
    },
    position: {
      x: 391.5202087823493,
      y: 99.49007248105102
    },
    parentNode: 'ecs-service-web',
    extent: 'parent',
    width: 122,
    height: 141,
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
    parentNode: 'ecs-cluster',
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      border: '1px solid black',
      justifyContent: 'top',
      width: 537,
      height: 367
    },
    data: {
      label: 'Background Tasks'
    },
    position: {
      x: 90.22193881788826,
      y: 436.67463567772
    },
    width: 537,
    height: 367,
    selected: false,
    positionAbsolute: {
      x: 819.1620303802222,
      y: 67.26338486914909
    },
    dragging: false,
    resizing: false
  },
  {
    id: 'ecs-service-bg-worker-1',
    type: 'AWSServiceNode',
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
      label: 'Worker 1',
      icon: 'fargate'
    },
    position: {
      x: 32.22250541043593,
      y: 77.03396602030648
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 122,
    height: 141,
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
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px dashed black',
      justifyContent: 'center'
    },
    data: {
      label: 'Worker 2',
      icon: 'fargate'
    },
    position: {
      x: 211.40006738955594,
      y: 77.31070385931628
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 122,
    height: 141,
    selected: false,
    positionAbsolute: {
      x: 1030.5620977697781,
      y: 144.57408872846537
    },
    dragging: false
  },
  {
    id: 'ecs-service-bg-worker-N',
    type: 'AWSServiceNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px dashed black',
      justifyContent: 'center'
    },
    data: {
      label: 'Worker N',
      icon: 'fargate'
    },
    position: {
      x: 385.42636799479897,
      y: 77.77507414057482
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 122,
    height: 141,
    selected: false,
    positionAbsolute: {
      x: 1204.5883983750211,
      y: 145.0384590097239
    },
    dragging: false
  },
  {
    id: 'auto-scaling-2',
    type: 'BiArrowNode',
    style: {
      padding: 10,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px dashed black',
      justifyContent: 'center'
    },
    data: {
      label: 'Auto Scaling'
    },
    position: {
      x: 25.610740046753108,
      y: 269.95584304682274
    },
    parentNode: 'ecs-service-bg',
    extent: 'parent',
    width: 490,
    height: 61,
    selected: false,
    positionAbsolute: {
      x: 842.1580784018627,
      y: -43.372654952236246
    },
    dragging: true
  }
];
