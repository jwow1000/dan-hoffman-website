import { urlFor } from "@/sanity/lib/utils";
import { pageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import RichText from "@/app/components/RichText";
import pageStyles from "@/app/page.module.css";
import styles from "@/app/individual-therapy/styles.module.css";

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
        
        <div className={styles.content}>
          <div className={styles.pageDivider}>
            <h1 className={styles.header1}>{data.title}</h1>
            <RichText value={data.text}/>
            
          </div>
          {/* <div className={pageStyles.portraitWrapper}>
            {
              imageUrl &&
              <FancyImage 
                src={imageUrl} 
                alt={data.coverImage.alt}
              ></FancyImage>
            }
          </div>  */}
        </div>
      </main>
      
    </div>
  );
}
