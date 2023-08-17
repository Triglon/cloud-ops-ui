import React from 'react';
import ReactFlow from 'reactflow';
import { Handle, Position } from 'reactflow';

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
      {/*<img src="/path/to/your/database-icon.png" alt="database" />*/}
      <div>{data.label}</div>
      <Handle type="target" position="top" style={{ borderRadius: 0 }} />
      <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
    </div>
  );
};

const elements = [
  {
    id: 'database',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: { label: 'Database' }
  }
];

const nodeTypes = {
  custom: DatabaseNode
};

export const DeploymentDiagram = () => {
  return <ReactFlow elements={elements} nodeTypes={nodeTypes} />;
};

export default DeploymentDiagram;
