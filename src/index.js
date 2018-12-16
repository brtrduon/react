import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author='Sam' 
                    timeAgo='Today at 4:45PM' 
                    comment='Nice blog post!' 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    timeAgo='Today at 2:00AM' 
                    comment='Pinche pendejo buey' 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Jane' 
                    timeAgo='Today at 5:00PM' 
                    comment='Ya buey' 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)