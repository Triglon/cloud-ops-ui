export const initialEdges = [
  {
    source: 'elb-target',
    sourceHandle: null,
    target: 'ecs-service-web-task-1',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#000000'
    },
    id: 'reactflow__edge-elb-ecs-service-web-task-1'
  },
  {
    source: 'elb-target',
    sourceHandle: null,
    target: 'ecs-service-web-task-2',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#000000'
    },
    id: 'reactflow__edge-elb-ecs-service-web-task-2'
  },
  {
    source: 'elb-target',
    sourceHandle: null,
    target: 'ecs-service-web-task-N',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#000000'
    },
    id: 'reactflow__edge-elb-ecs-service-web-task-N'
  },
  {
    source: 'elb',
    sourceHandle: null,
    target: 'elb-target',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#000000'
    },
    id: 'reactflow__edge-elb-target-elb'
  },
  {
    source: '5',
    sourceHandle: null,
    target: 'ecs-service-bg-worker-N',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#FF0072'
    },
    id: 'reactflow__edge-5-ecs-service-bg-worker-N'
  },
  {
    source: '5',
    sourceHandle: null,
    target: 'ecs-service-bg-worker-2',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#FF0072'
    },
    id: 'reactflow__edge-5-ecs-service-bg-worker-2',
    selected: false
  },
  {
    source: '5',
    sourceHandle: null,
    target: 'ecs-service-bg-worker-1',
    targetHandle: null,
    type: 'smoothstep',
    markerEnd: {
      type: 'arrowclosed',
      width: 20,
      height: 20,
      color: '#FF0072'
    },
    id: 'reactflow__edge-5-ecs-service-bg-worker-1',
    selected: true
  }
];
