import ReactFlow, {
  Controls,
  Background,
  Handle,
  applyNodeChanges,
  applyEdgeChanges,
  getBezierPath,
  getMarkerEnd,
  BaseEdge,
  MarkerType,
  addEdge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';
import DatabaseNode from './elements/DatabaseNode';
import ResizableNode from './elements/ResizableNode';
import { customNodeStyles } from './elements/constants';

const initialEdges = [
  // {
  //   id: 'e1',
  //   source: '1',
  //   target: '2',
  //   type: 'smoothstep',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //     width: 20,
  //     height: 20,
  //     color: '#FF0072'
  //   }
  // },
  // {
  //   id: 'e2',
  //   source: '2',
  //   target: '3',
  //   type: 'smoothstep',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //     width: 20,
  //     height: 20,
  //     color: '#FF0072'
  //   }
  // },
  // {
  //   id: 'e3',
  //   source: '2',
  //   target: '4',
  //   type: 'smoothstep',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //     width: 20,
  //     height: 20,
  //     color: '#FF0072'
  //   }
  // },
  // {
  //   id: 'e4',
  //   source: '3',
  //   target: '6',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //     width: 20,
  //     height: 20,
  //     color: '#FF0072'
  //   },
  //   type: 'smoothstep'
  // },
  // {
  //   id: 'e5',
  //   source: '4',
  //   target: '5',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //     width: 20,
  //     height: 20,
  //     color: '#FF0072'
  //   },
  //   type: 'smoothstep'
  // },
  // {
  //   id: 'e6',
  //   source: '7',
  //   target: '3',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //     width: 20,
  //     height: 20,
  //     color: '#FF0072'
  //   },
  //   type: 'smoothstep'
  // }
];

const initialNodes = [
  {
    id: '1',
    type: 'ResizableNode',
    data: { label: 'Load Balancer' },
    position: { x: 293, y: -154 },
    style: customNodeStyles
  },
  { id: '2', type: 'ResizableNode', data: { label: 'Container Service' }, position: { x: 300, y: 100 } },
  { id: '3', type: 'ResizableNode', data: { label: 'Web Service Tasks' }, position: { x: 500, y: 50 } },
  { id: '4', type: 'ResizableNode', data: { label: 'Background Tasks' }, position: { x: 500, y: 150 } },
  { id: '5', type: 'ResizableNode', data: { label: 'Redis Cache' }, position: { x: 700, y: 150 } },
  { id: '6', type: 'DatabaseNode', data: { label: 'PostgreSQL' }, position: { x: 700, y: 50 } },
  { id: '7', type: 'ResizableNode', data: { label: 'Auto Scaling' }, position: { x: 500, y: 250 } }
];

const nodeTypes = {
  DatabaseNode,
  ResizableNode
};

function CloudArchitecture() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        params.type = 'smoothstep';
        params.markerEnd = {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#FF0072'
        };
        return addEdge(params, eds);
        // console.log(edges);
      }),
    [setEdges]
  );
  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => {
      // console.log(nds);
      return applyNodeChanges(changes, nds);
    });
  }, []);
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((eds) => {
        console.log(eds);
        return applyEdgeChanges(changes, eds);
      }),
    []
  );

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        fitView={true}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default CloudArchitecture;
