import cn from 'classnames';

const Card: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('', className)}
      {...props}
    />
  );
};

export default Card;
