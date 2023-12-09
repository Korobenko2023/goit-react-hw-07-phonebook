import { Vortex } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderDiv>
               <Vortex
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="vortex-wrapper"
                  colors={['blue', 'yellow', 'orange', 'blue', 'yellow', 'orange']}
                />           
        </LoaderDiv>
    );
};