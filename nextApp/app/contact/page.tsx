import FancyImage from "../components/fancyImage";
import { urlFor } from "@/sanity/lib/utils";
import { pageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import pageStyles from "@/app/page.module.css";

export default async function Page() {
  const { data } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'contact' },
  });
  const imageUrl = urlFor(data.coverImage).url();
  console.log("data", data)

  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <h1 className={pageStyles.header1}>Contact Dan Hoffmann</h1>
        <div className={pageStyles.pageDivider}>
          <PortableText value={data.text}/>
          
        </div>
         <div className={pageStyles.portraitWrapper}>
          {
            imageUrl &&
            <FancyImage 
              src={imageUrl} 
              alt="a portrait of Dan Hoffman the therapist leaning on a fence in a bucolic rural setting, lush green grass. He's wearing a tweed suit with a lighter undershirt, and dark tie. He wears glasses"
            ></FancyImage>
          }
          
        </div>  
      </main>
      
    </div>
  );
}
