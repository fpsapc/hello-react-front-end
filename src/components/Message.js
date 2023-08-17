import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../redux/messages/messagesSlice';

function Message() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.messages);
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  return (
    <>
      <h1>Greeting Messages:</h1>
      <h3>{message.greeting}</h3>
      ;

    </>
  );
}
export default Message;
