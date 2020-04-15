export const mockMessages = [
    {
      userId: 1,
      msg: 'Hi Vladimir',
    },
    {
      userId: 2,
      msg: 'Hi, John',
    },
    {
      userId: 1,
      msg: 'When we will learn real data fetching?',
    },
    {
      userId: 2,
      msg:
        "Let's get the basic first. We need to understand styling and handling inputs right? After all you want not only to receive but send messages too right?",
    },
  ];
  
  export const chats = [
    {
      id: '123',
      title: 'Sophia Willis',
      description: 'Hey there',
      user: {
        avatarUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
      },
      date: '8:30am',
    },
    {
      id: '234',
      title: 'Ken Wheeler',
      description: "What's up, Dude?",
      user: {
        avatarUrl: 'https://avatars2.githubusercontent.com/u/286616?s=460&v=4',
      },
      date: 'Yesterday',
    },
    {
      id: '123',
      title: 'John Doe',
      description: 'Hey there',
      user: {
        avatarUrl: 'https://randomuser.me/api/portraits/men/38.jpg',
      },
      date: 'Yesterday',
    },
    {
      id: '123',
      title: 'John',
      description: 'Hey there',
      user: {
        avatarUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
      },
      date: 'Yesterday',
    },
    {
      id: '123',
      title: 'Zoey Barnes',
      description: "How's going?",
      user: {
        avatarUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
      },
      date: '15/04/2018',
    },
  ];
  
  export const getChats = () =>
    new Promise(resolve => setTimeout(() => resolve(chats), 1000));
  
  export const getMessagesById = id =>
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000));
  
  export const postMessage = msg =>
    mockMessages.push({
      userId: 1,
      msg,
    });