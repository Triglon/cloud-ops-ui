import { Handle } from 'reactflow';
import { cloudfrontIcons, textCenterNodeStyle } from './constants';

const AWSServiceNode = ({ data }) => {
  return (
    <div style={textCenterNodeStyle}>
      <img src={`${cloudfrontIcons}/${data.icon}.svg`} alt="database" />
      <div>{data.label}</div>
      <Handle type="target" position="top" style={{ borderRadius: 0 }} />
      <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
    </div>
  );
};

export default AWSServiceNode;
