import { memo } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';
import { customNodeStyles } from './constants';

const ResizableNode = ({ data, selected }) => {
  return (
    <div>
      <NodeResizer minWidth={100} minHeight={30} isVisible={selected} />

      <Handle type="target" position={Position.Top} />
      <div style={{ padding: 10 }}>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(ResizableNode);
