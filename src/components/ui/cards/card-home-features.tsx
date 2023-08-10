import React from 'react';
import Image from 'next/image';
import Card from './card';
import broadcast from '@/assets/images/Vector.png';

type CardHomeprops = {
  title?: string;
  paragraph?: string;
  width: number;
  height: number;
  source: string;
  alternative: string;
  className: string;
};
const CardHome: React.FC<CardHomeprops> = ({
  title,
  paragraph,
  width,
  height,
  source,
  alternative,
  className,
}) => {
  return (
    <>
      <Card className="rounded-tl-3xl rounded-br-3xl border border-teal-400 py-1 px-2 shadow-md  shadow-zinc-600 lg:h-48  lg:w-60 lg:py-3 lg:px-5">
        <div>
          <div className="flex items-center justify-center">
            <Image
              className={className}
              src={source}
              alt={alternative}
              // layout="responsive"
              width={width}
              height={height}
            />
          </div>
          <div className="flex flex-col">
            <div className="lg:text:md flex flex-row items-center justify-center text-xs font-bold text-teal-400 md:text-base">
              {title}
            </div>
            <div className="lg:text:md block items-center justify-center text-xs md:text-base">
              {paragraph}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default CardHome;
