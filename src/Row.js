
import Box from './Box';

const Row = (props) => {
  return <div style={{
    height: props.height,
    width: props.width
  }}>{
    Array(props.count).fill().map((_, i) => {
      return <Box height={props.height}
                  width={props.width / props.count}
                  key={i} />;
    })
  }</div>
};

export default Row;