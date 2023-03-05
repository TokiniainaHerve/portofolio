import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import { Launcher } from "./components/chatComponents";
import { handleQuery } from "./service/ChatbotService";



function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [messageList,setMessageList] = useState([]);
  const [isMessageLoading,setMessageLoading] = useState(false);
  const useCursor = settings.useCustomCursor;


  useEffect(() => {
    // handle the message after rerender
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage!= undefined && lastMessage.author === 'me') {
      const response = handleQuery(lastMessage.data.text);
      const responseObj = {
        author: 'bot',
        type: 'text',
        data: { text: response }
      };
      setMessageList([...messageList, responseObj]);
      setMessageLoading(false);
    }
  }, [messageList]);
  
  function onMessageWasSent(message){

    //Set loading
    setMessageLoading(true);
    setMessageList([...messageList, message]);

  }
  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        <Launcher
                agentProfile={{
                  teamName: "Tokiniaina's bot",
                  imageUrl: '/'
                }}
                theme={themes[theme]}
                onMessageWasSent={onMessageWasSent}
                isLoading={isMessageLoading}
                messageList={messageList}
              />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
