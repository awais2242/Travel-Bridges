import CartCheckBagIcon from '@/components/icons/cart-check-bag';
import { formatString } from '@/lib/format-string';
import usePrice from '@/lib/use-price';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';

const CartCounterButton1 = () => {
    const { t } = useTranslation();
    const { totalUniqueItems, total } = useCart();
    const [_, setDisplayCart] = useAtom(drawerAtom);
    const { price: totalPrice } = usePrice({
        amount: total,
    });
    function handleCartSidebar() {
        setDisplayCart({ display: true, view: 'cart' });
    }
    return (
        <button
            className="hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 ltr:right-0 rtl:left-0 z-40 shadow-900 rounded ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover"
            onClick={handleCartSidebar}
        >
            <span className="flex pb-0.5">
                <CartCheckBagIcon className="shrink-0" width={14} height={16} />
                <span className="flex ltr:ml-2 rtl:mr-2">
                    {formatString(totalUniqueItems, t('common:text-item'))}
                </span>
            </span>
            <span className="bg-light rounded w-full py-2 px-2 text-accent mt-3">
                {totalPrice}
            </span>
        </button>
    );
};

const CartCounterButton = () => {
    const { t } = useTranslation();
    const { totalUniqueItems, total } = useCart();
    const [_, setDisplayCart] = useAtom(drawerAtom);
    const { price: totalPrice } = usePrice({
        amount: total,
    });
    function handleCartSidebar() {
        setDisplayCart({ display: true, view: 'cart' });
    }
    return (
        <button
            // className="hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 ltr:right-0 rtl:left-0 z-40 shadow-900 rounded ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover"
            // className='lg:max-w-sm lg:min-w-[13%] md:min-w-[20%] xs:min-w-[35%]'
            className="product-cart"
            onClick={handleCartSidebar}
        >
            <span className="flex pb-0.5">

                <CartCheckBagIcon className="shrink-0 " width={26} height={26} />
                <span className="ml-1 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 my-auto">{totalUniqueItems}</span>

                <span className="flex ltr:ml-1 rtl:mr-1 text-center text-red-450 text-xs ">
                    Your Cart<br />
                    {totalPrice}
                </span>

            </span>


            {/* <span className="bg-light rounded w-full py-2 px-2 text-accent mt-3">
        {totalPrice}
      </span> */}
        </button>
    );
};

export default CartCounterButton;
