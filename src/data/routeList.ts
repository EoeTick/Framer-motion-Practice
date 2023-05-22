export interface route {
  name: string;
  to: string;
}

const routeList: route[] = [
  { name: "example1", to: "example1" },
  { name: "example2", to: "example2" },
  { name: "example3", to: "example3" },
  { name: "example4", to: "example4" },
  { name: "codrops example1", to: "codrops/example1" },
  { name: "codingStartup example1", to: "codingStartup/example1" },
];

export { routeList };
