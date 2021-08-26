export interface RouteType {
  path: string,
  isExact?: boolean,
  component?: any,
  meta: any,
  children?: RouteType[]
}