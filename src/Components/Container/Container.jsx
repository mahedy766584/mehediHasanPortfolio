/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (
        <div className='max-w-screen-xl mx-auto xl:px-10 md:px-10 sm:px-2 px-5'>
            {children}
        </div>
    );
};

export default Container;