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
import AWSServiceNode from './elements/AWSServiceNode';
import ResizableNode from './elements/ResizableNode';
import { textCenterNodeStyle, textTopNodeStyle } from './elements/constants';
import { initialNodes } from './initialNodes';
import { initialEdges } from './initialEdges';
import BiArrowNode from './elements/ExpandingArrowNode';

const nodeTypes = {
  AWSServiceNode,
  ResizableNode,
  BiArrowNode
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
        console.log(eds);
        return addEdge(params, eds);
        // console.log(edges);
      }),
    [setEdges]
  );
  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => {
      console.log(nds);
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
