import React from 'react';
import { useParams } from 'react-router';

const SkillDetails = () => {
    const {id}=useParams();
    console.log(id)
    return (
        <div>
            
        </div>
    );
};

export default SkillDetails;