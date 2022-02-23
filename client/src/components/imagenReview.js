import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const ImagenReview = () => {

    return (
        <div className="relative rounded-xl">
            <div className="text-center m-6">

                <StaticImage
                    src="../images/YinYan10.png"
                    alt="Yin Yan"
                    formats={["WEBP"]}
                    width={80} />
            </div>
            <h2 className="text-center text-5xl m-8">Experiencias de nuestros clientes</h2>
            <div className="overflow-auto">

                <div className="w-[1000px] my-0 mx-auto">

                    <div className="relative w-full flex gap-8 snap-x snap-mandatory overflow-x-auto pb-14">
                        <div className="snap-center ...">

                            <StaticImage
                                src="../images/12.jpeg"
                                alt="Review"
                                formats={["WEBP"]}
                                width={300} />
                        </div>
                        <div className="snap-center ...">

                            <StaticImage
                                src="../images/13.jpeg"
                                alt="Review"
                                formats={["WEBP"]}
                                width={300} />
                        </div>
                        <div className="snap-center ...">

                            <StaticImage
                                src="../images/11.jpeg"
                                alt="Review"
                                formats={["WEBP"]}
                                width={278} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ImagenReview;
