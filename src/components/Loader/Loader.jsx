import PropTypes from "prop-types";
import { ImSpinner9 } from 'react-icons/im';
import { LoaderWrapper, Message, Spinner } from './Loader.styled';

export const Loader = ({message}) => {
    return (
      <LoaderWrapper>
        <Spinner><ImSpinner9 /></Spinner>
        {message && <Message>{message}</Message>}
      </LoaderWrapper>
    )
}

Loader.propTypes = {
    message: PropTypes.string,
};