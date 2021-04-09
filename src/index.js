import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './component/CommentDetails';
import ApprovalCard from './component/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails author="Swathi" commentTime="Today at 6:00 AM." text="Nice Article" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <CommentDetails author="Rodrigo" commentTime="Today at 12:00 PM." text="Awesome" avatar={faker.image.avatar()}/>
      <CommentDetails author="Namrata" commentTime="Today at 4:00 PM." text="Cool" avatar={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
