import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header'
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardList'
import { hot } from 'react-hot-loader/root';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { PostContextProvider } from './context/postContext';


function AppComponent() {
  const [token] = useToken();


  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
};

export const App = hot(() => <AppComponent />);
