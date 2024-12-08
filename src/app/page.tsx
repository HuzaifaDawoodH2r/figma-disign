
import HeroSection from "./components/HeroSection";
import { FeaturedProducts } from "./components/Feature-card";
import { LatestProducts } from "./components/Lastest-Products";
import { ShopeOffers } from "./components/ShopeOffers";
import ProductShowcase from "./components/product-showcase";
import TrendingProducts from "./components/TrendingProducts";
import DiscountSection from "./components/DiscountSection";
import TopCategories from "./components/TopCategories";
import NewsletterHero from "./components/NewsletterHero";
import LatestBlog from "./components/latest-blog";


export default function Home() {
  return (
    <div>

      
      <HeroSection/>
      <LatestProducts/>
     {/* secondpage */}
      <FeaturedProducts/>
      {/* therdpage */}
      <ShopeOffers/>
       {/* forthpage */}
       <ProductShowcase/>
       {/* fivepage */}
<TrendingProducts/>
{/* six page */}

<DiscountSection/>
{/* sevenpage */}
<TopCategories/>
{/* eightpage */}
<NewsletterHero/>
{/* // ninepage */}

<LatestBlog/>
    </div>
  );
}
