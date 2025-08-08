import {defineQuery} from "next-sanity";


// grab page info based on slug
export const pageQuery = defineQuery(`
  *[_type == "page" && slug == $slug ][0]

`);