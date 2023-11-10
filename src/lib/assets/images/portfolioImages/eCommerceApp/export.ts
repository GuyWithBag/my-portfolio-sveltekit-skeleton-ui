import ImageSource from "$lib/models/ImageSource"
import HomePage from './home_page.png';
import HomePage2 from './home_page_2.png';
import HomePageDarkMode from './home_page_dark_mode.png';
import WishList from './wish_list.png';
import ShoppingCart from './shopping_cart.png';
import ProductPage from './product_page.png';

export const eCommerceAppImages: ImageSource[] = [
    new ImageSource(
        HomePage, 
        "Home Page"
    ), 
    new ImageSource(
        HomePage2, 
        "Home Page 2"
    ), 
    new ImageSource(
        HomePageDarkMode, 
        "Home Page Dark Mode"
    ), 
    new ImageSource(
        WishList, 
        "Wish List"
    ), 
    new ImageSource(
        ShoppingCart, 
        "Shopping Cart"
    ), 
    new ImageSource(
        ProductPage, 
        "Product Page"
    ), 
];