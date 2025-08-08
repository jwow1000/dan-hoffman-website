import FancyImage from "./components/fancyImage";
import { pageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/utils";
import { PortableText } from '@portabletext/react'
import styles from "./page.module.css";

export default async function Home() {
  const { data } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'index' },
  });
  const imageUrl = urlFor(data.coverImage).url();
  // console.log("data", data)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.header1}>Dan Hoffman, LCSW</h1>
        <div className={styles.content}>
          <div className={styles.pageDivider}>
            <PortableText value={data.text}/>
          </div> 
          
          <div className={styles.portraitWrapper}>
            <FancyImage 
              src={imageUrl} 
              objectFit="contain"
              alt={data.coverImage.alt}

            
            ></FancyImage>
          </div>

        </div>

       
      
       
      </main>
      
    </div>
  );
}
