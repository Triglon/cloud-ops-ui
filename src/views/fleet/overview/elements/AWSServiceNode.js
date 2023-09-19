import { Handle } from 'reactflow';
import { iconsBaseUrl, textCenterNodeStyle } from './constants';

const AWSServiceNode = ({ data, sourcePosition, targetPosition }) => {
  return (
    <div style={textCenterNodeStyle}>
      <img src={`${iconsBaseUrl}/${data.icon}.svg`} alt="database" />
      <div>{data.label}</div>
      <Handle type="target" position={targetPosition || 'top'} />
      <Handle type="source" position={sourcePosition || 'bottom'} />
    </div>
  );
};

export default AWSServiceNode;
