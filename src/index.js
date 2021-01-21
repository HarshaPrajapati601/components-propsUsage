import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return(
       <div className="ui comments">
            <ApprovalCard>
                    <CommentDetail author="Sam" dateTime="4 oclock today" imagePath={faker.image.animals()} />
            </ApprovalCard>
            <ApprovalCard>
                    <CommentDetail author="John" dateTime="5 oclock today" imagePath={faker.image.animals()} />  
            </ApprovalCard>
            <ApprovalCard>
                    <CommentDetail author="KIm" dateTime="6 oclock today" imagePath={faker.image.animals()} /> 
            </ApprovalCard>
       </div> 
    )
}
 ReactDom.render(
     <App />,
    document.querySelector('#root')
 )