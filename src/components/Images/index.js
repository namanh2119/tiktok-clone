import { forwardRef } from 'react';

function Image({ ...props }, ref) {
    // eslint-disable-next-line
    return <img ref={ref} {...props} />;
}

export default forwardRef(Image);
