import { Handle } from 'reactflow';
import { cloudfrontIcons, textCenterNodeStyle } from './constants';

const DatabaseNode = ({ data }) => {
  return (
    <div style={textCenterNodeStyle}>
      <img src={`${cloudfrontIcons}/rds.svg`} alt="database" />
      <div>{data.label}</div>
      <Handle type="target" position="top" style={{ borderRadius: 0 }} />
      <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
    </div>
  );
};

export default DatabaseNode;
