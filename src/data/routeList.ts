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
  { name: "codingStartup example2", to: "codingStartup/example2" },
  { name: "codingStartup example3", to: "codingStartup/example3" },
  { name: "codingStartup example4", to: "codingStartup/example4" },
  { name: "codingStartup example5", to: "codingStartup/example5" },
  { name: "codingStartup example6", to: "codingStartup/example6" },
  { name: "codingStartup example7", to: "codingStartup/example7" },
  { name: "codingStartup example8", to: "codingStartup/example8" },
  { name: "codingStartup example9", to: "codingStartup/example9" },
  { name: "codingStartup example10", to: "codingStartup/example10" },
  { name: "like example1", to: "like/example1" },
];

export { routeList };
