import React from 'react';
import ActivityFeed from './ActivityFeed';
import { FaUserPlus, FaCommentDots, FaFileUpload, FaStar } from 'react-icons/fa';

export default {
  title: 'User/ActivityFeed',
  component: ActivityFeed,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable activity feed component displaying user activities with avatars, icons, and timestamps. 
Supports different variants ('default' or 'compact') and customizable background colors.

### Sample Data
Below is the sample data used in the stories to demonstrate the component's functionality:

\`\`\`javascript
import { FaUserPlus, FaCommentDots, FaFileUpload, FaStar } from 'react-icons/fa';


const sampleActivities = [
  {
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'Jane Doe joined the platform.',
    time: '2 minutes ago',
    icon: <FaUserPlus />,
    type: 'New User',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=7',
    text: 'John Smith commented on your post.',
    time: '10 minutes ago',
    icon: <FaCommentDots />,
    type: 'Comment',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=4', 
    text: 'Alice Cooper uploaded a file.',
    time: '1 hour ago',
    icon: <FaFileUpload />,
    type: 'Upload',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=9',
    text: 'Bob Wilson rated your content 5 stars.',
    time: '3 hours ago',
    icon: <FaStar />,
    type: 'Rating',
  },
];
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', description: 'Background color of the activity feed container' },
    variant: {
      control: { type: 'select', options: ['default', 'compact'] },
      description: 'Display variant of the activity feed',
    },
    activities: {
      control: 'object',
      description: 'Array of activity objects containing avatar, text, time, icon, and type',
    },
  },
  args: {
    onClick: () => console.log('Feed item clicked'),
  },
};

const sampleActivities = [
  {
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'Jane Doe joined the platform.',
    time: '2 minutes ago',
    icon: <FaUserPlus />,
    type: 'New User',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=7',
    text: 'John Smith commented on your post.',
    time: '10 minutes ago',
    icon: <FaCommentDots />,
    type: 'Comment',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=4',
    text: 'Alice Cooper uploaded a file.',
    time: '1 hour ago',
    icon: <FaFileUpload />,
    type: 'Upload',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=9',
    text: 'Bob Wilson rated your content 5 stars.',
    time: '3 hours ago',
    icon: <FaStar />,
    type: 'Rating',
  },
];

export const Default = () => <ActivityFeed activities={sampleActivities} />;