export const Partnership = ({ partnership }) => {
    if (partnership) {
        const { image, name, description } = partnership;
        return (
            <>
            <img src={image} alt={name} and style={{ width: '150px' }} />
            <div className='m-4'>
            <h5 className='fw-bold'>{name}</h5>
                    {description}
            </div>
            </>
         ); 
    }
    return null;
};

