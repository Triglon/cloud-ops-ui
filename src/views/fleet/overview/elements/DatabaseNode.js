import { Handle } from 'reactflow';
import { customNodeStyles } from './constants';

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

export default DatabaseNode;
