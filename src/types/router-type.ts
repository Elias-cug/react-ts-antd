import React from 'react';

interface Meta {
  title?: string;
  icon?: string;
}
export interface RouteType {
  path: string;
  isExact?: boolean;
  component?: any;
  meta: Meta;
  children?: RouteType[];
}
