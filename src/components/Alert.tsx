import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'grommet';

const variantStyles = {
  primary: {
    color: '#cce5ff',
    borderColor: '#b8daff',
  },
  warning: {
    color: '#FFBF5C',
    borderColor: '#FFBF5C',
  },
  secondary: {
    color: '#fdfcfe',
    borderColor: '#d3d3d3',
  },
  info: {
    color: '#d9edf7',
    borderColor: '#bce8f1',
  },
  error: {
    color: '#f2dede',
    borderColor: '#ebccd1',
  },
  success: {
    color: '#d4edda',
    borderColor: '#c3e6cb',
  },
};

const HighlightStyles = styled.div`
  .alert-highlight {
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.04);
    margin-inline-end: 3px;
    margin-inline-start: 3px;
  }
`;

export const Alert = (
  props: {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
    style?: any;
    variant?: string;
  } & BoxProps
): JSX.Element => {
  const { variant = 'primary', className, children, pad } = props;
  return (
    <Box
      border
      className={className}
      pad={pad || 'medium'}
      round="xsmall"
      variant={variant}
      {...props}
      // @ts-ignore
      style={variantStyles[variant]}
    >
      <HighlightStyles>{children}</HighlightStyles>
    </Box>
  );
};
