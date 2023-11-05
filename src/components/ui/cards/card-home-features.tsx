import React from 'react';
import Image from 'next/image';
import Card from './card';
import broadcast from '@/assets/images/Vector.png';

type CardHomeProps = {
  title?: string;
  paragraph?: string;
  width: number;
  height: number;
  source: string;
  alternative: string;
  className: string;
  cardClass: string;
};
const CardHome: React.FC<CardHomeProps> = ({
  title,
  paragraph,
  width,
  height,
  source,
  alternative,
  className,
  cardClass,
}) => {
  return (
    <>
      <Card className="rounded-tl-3xl rounded-br-3xl border border-teal-400 p-3 md:p-3 shadow-1000  lg:h-48  lg:w-60 lg:px-5">
        <div>
          <div className="flex items-center justify-center ${className}">
            <Image
              className={className}
              src={source}
              alt={alternative}
              // layout="responsive"
              width={width}
              height={height}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="lg:text:md flex flex-row items-center justify-center text-lg font-bold text-teal-400 md:text-base">
              {title}
            </div>
            <div className="text-center text-base ">
              {paragraph}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default CardHome;
