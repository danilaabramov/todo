import {useState} from 'react';
import TotalContacts from "../icons/total-contacts";
import Calendar from "../icons/calendar";
import ProjectReport from "../icons/project-report";

const iconMap = {
    'TotalContacts': TotalContacts,
    'Calendar': Calendar,
    'ProjectReport': ProjectReport
};

export default function ButtonBar({name, text, active = true}) {
    const [isHovered, setIsHovered] = useState(false);

    const Icon = iconMap[name];

    return (
        <div className='button-bar'
             style={{width: text && active ? 150 : 30}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <div style={{width: 40, display: 'flex'}}>
                <Icon isHovered={isHovered} color='#fff' colorHover='#175BDD'/>
            </div>
            <div className='text-button-bar'>
                <div className='text-container-button-bar'>
                    {text}
                </div>
            </div>
        </div>
    );
}
