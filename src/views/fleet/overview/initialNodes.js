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
    id: '4',
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
      label: 'Background Tasks'
    },
    position: {
      x: 500,
      y: 150
    },
    width: 156,
    height: 61
  },
  {
    id: '5',
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
      label: 'Redis Cache'
    },
    position: {
      x: 696.0023295781655,
      y: 28.737330537690468
    },
    width: 119,
    height: 61,
    selected: false,
    positionAbsolute: {
      x: 696.0023295781655,
      y: 28.737330537690468
    },
    dragging: true
  },
  {
    id: '6',
    type: 'DatabaseNode',
    data: {
      label: 'PostgreSQL'
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
    selected: true,
    positionAbsolute: {
      x: 1205.6463950905018,
      y: 145.8205150902038
    },
    dragging: false
  },
  {
    id: '8',
    type: 'FargateNode',
    data: {
      label: 'Task 1'
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
    id: '9',
    type: 'FargateNode',
    data: {
      label: 'Task 2'
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
    id: '10',
    type: 'FargateNode',
    data: {
      label: 'Task N'
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
  }
];
