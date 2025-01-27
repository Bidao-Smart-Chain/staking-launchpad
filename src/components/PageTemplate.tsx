import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar } from './AppBar';
import { Heading } from './Heading';

const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 30px 0;
  position: relative;
  margin-top: 64px;
`;

const Gutter = styled.div`
  padding: 0 48px 5rem; // adds space for footer
  display: flex;
  justify-content: center;
`;

const RainbowBackground = styled.div`
  background: #171f32;
  min-height: 100vh;
`;

interface Props extends RouteComponentProps {
  children?: React.ReactNode;
  title: string;
  header?: string;
  description?: string;
  history: any;
}

const _PageTemplate = ({
  children,
  description,
  title,
  header = title,
}: Props): JSX.Element => {
  return (
    <RainbowBackground>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <AppBar />
      <Gutter>
        <Content>
          <Heading level={1} size="medium" color="blueDark" className="mb40">
            {header}
          </Heading>
          {children}
        </Content>
      </Gutter>
    </RainbowBackground>
  );
};

export const PageTemplate = withRouter(_PageTemplate);
