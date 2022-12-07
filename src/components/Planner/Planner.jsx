import React from 'react';
import {Inject, Day, Week, WorkWeek, Month , Agenda, ScheduleComponent, DragAndDrop} from '@syncfusion/ej2-react-schedule';

const Planner = () =>{

    return (
        <ScheduleComponent currentView='Month' allowDragAndDrop={true}>
            <Inject services={[Day, Week, WorkWeek, Month,Agenda,DragAndDrop] } />
        </ScheduleComponent>
    )
}

export default Planner;