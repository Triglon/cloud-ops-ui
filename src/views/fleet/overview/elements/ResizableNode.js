import { memo } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';
import { textCenterNodeStyle } from './constants';

const ResizableNode = ({ data, selected, sourcePosition, targetPosition }) => {
  return (
    <div>
      <NodeResizer minWidth={100} minHeight={30} isVisible={selected} />
      <div style={{ padding: 10 }}>{data.label}</div>
      <Handle type="target" position={targetPosition || Position.Top} />
      <Handle type="source" position={sourcePosition || Position.Bottom} />
    </div>
  );
};

export default memo(ResizableNode);
