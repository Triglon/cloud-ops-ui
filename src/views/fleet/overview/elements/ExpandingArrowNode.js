import { memo } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';
import { textCenterNodeStyle } from './constants';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const BiArrowNode = ({ data, selected, sourcePosition, targetPosition }) => {
  return (
    <div>
      <NodeResizer minWidth={100} minHeight={30} isVisible={selected} />
      <div style={{ padding: 10, fontSize: 20 }}>
        &#8249;&#8213; &#8213; &#8213; &#8213; &#8213; &#8213; &#8213; {data.label} &#8213; &#8213; &#8213; &#8213; &#8213; &#8213;&#8250;
      </div>
    </div>
  );
};

export default memo(BiArrowNode);
