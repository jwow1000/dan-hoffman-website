import FancyImage from "../components/fancyImage";
import { urlFor } from "@/sanity/lib/utils";
import { pageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import pageStyles from "@/app/page.module.css";
import { PortableText } from "next-sanity";

export default async function Page() {
  const { data } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'individual-psychotherapy' },
  });
  const imageUrl = urlFor(data.coverImage).url();
  // console.log("data", data)

  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <h1 className={pageStyles.header1}>{data.title}</h1>
        <div className={pageStyles.content}>
          <div className={pageStyles.pageDivider}>
            <PortableText value={data.text}/>
            
          </div>
          <div className={pageStyles.portraitWrapper}>
            {
              imageUrl &&
              <FancyImage 
                src={imageUrl} 
                alt={data.coverImage.alt}
              ></FancyImage>
            }
          </div> 
        </div>
      </main>
      
    </div>
  );
}
