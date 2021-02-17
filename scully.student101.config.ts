import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "student101",
  outDir: './dist/static',
  routes: {
    // "/lessons/:course":{
    //   type:"json",
    //   course:{
    //     url: "http://localhost:3000/english/getLessons/",
    //     property: "id"
    //   }
    // },
    // "/library":{
    //   type:"json",
    //   url: "http://localhost:3000/assignment/getAssignments"
    // }
  }
};