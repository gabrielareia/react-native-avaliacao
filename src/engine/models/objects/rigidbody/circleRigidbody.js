import withRigidbody from '../../../hoc/withRigidbody';
import Circle from '../primitives/circle';

const CircleRigidbody = (props) => {
  const {
    ...rest
  } = props;

  return (
    <Circle
      {...rest}
    />
  );
};

export default withRigidbody(CircleRigidbody);
