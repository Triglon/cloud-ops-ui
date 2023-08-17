import ReactFlow, {
  Controls,
  Background,
  Handle,
  applyNodeChanges,
  applyEdgeChanges,
  getBezierPath,
  getMarkerEnd,
  BaseEdge,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';

const initialEdges = [
  {
    id: '1->2',
    source: '1',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072'
    }
  }
];

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input'
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 }
  },
  {
    id: 'database',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: { label: 'Database' }
  }
];

const customNodeStyles = {
  background: '#9CA8B3',
  padding: 10,
  borderRadius: '5%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const DatabaseNode = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <img src="https://main-media-public.s3.amazonaws.com/cloud-fleet/icons/rds.svg" alt="database" />
      <div>{data.label}</div>
      <Handle type="target" position="top" style={{ borderRadius: 0 }} />
      <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
    </div>
  );
};

const nodeTypes = {
  custom: DatabaseNode
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
