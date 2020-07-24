import React from 'react';

export default (Componet,className)=>{
    return (props) => {
        return (
            <div className={className}>
                <Componet {...props} />
            </div>
        );
    }
}