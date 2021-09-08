import React from 'react';

interface Meta {
  title?: string;
  icon?: string;
}
export interface RouteType {
  path: string;
  isExact?: boolean;
  component?: React.ReactNode;
  meta?: Meta;
  children?: RouteType[];
}
