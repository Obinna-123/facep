import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { db } from "@/settings/firebase.setting";
import { getDocs,collection,orderBy,query} from "firebase/firestore";

export async function getStaticProps() {
    const partners = [];

    const q = query(collection(db,'partners'),orderBy('createdAt','desc'));
    const onSnapshot = await getDocs(q);
    onSnapshot.forEach(doc => {
        let firedoc={data:doc.data()};
        firedoc.id=doc.id
        partners.push(firedoc);
    })

    return {
        props:{
            allPartners:partners
        }
    }
}

export default function Partners({allPartners}) {
    console.log(allPartners);
   return (
    <>
    <Head>
       <link rel="icon" href="/facepal_icon_logo.png" />
       <meta name="description" content="The Coolest way to connect with friends and hold money" />
       <meta name="keywords" content="facepal" />
       <title>facepal | Become a Partner</title>
     </Head>
   <main className="px-4 py-6 sm:px-16 sm:py-16 md:px-24 md:py-20">
        <h1 className="text-4xl text-gray-700">
            Choose from our list of partners to access financial services
        </h1>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
           {
                '1 2 3 4 5 6 7'.split('').map(partner => (
                    <article className="border border-gray-200 rounded-lg shadow-md p-4">
                    <div className="flex flex-row justify-between items-center gap-4 mb-4">
                        <blockquote>
                            <span className="text-2xl">Company name</span>
                            <span>+2347584757575</span>
                        </blockquote>
                        <Image
                        width={60}
                        height={60}
                        src={`https://images.pexels.com/photos/4586688/pexels-photo-4586688.jpeg`}
                        alt="company logo"/>
                    </div>

                    <Link href='#' className="flex flex-row justify-center gap-2 bg-violet-950 rounded-lg p-4 text-white">
                    <span>View profile</span>
                    {/*right point icon */}
                    </Link>
                </article>
                ))
           }
        </section>
   </main>
   </>
   )
}