import { awsIcons } from './elements/constants';
import { Position } from 'reactflow';

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
      color: '#FF0072'
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
      color: '#FF0072'
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
      color: '#FF0072'
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
      color: '#FF0072'
    },
    id: 'reactflow__edge-elb-target-elb'
  }
];
