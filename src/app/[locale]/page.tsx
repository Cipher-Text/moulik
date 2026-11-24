import Link from 'next/link';
import Image from 'next/image';
import { articles, foods } from '@/lib/content';
import { FoodSearch } from '@/components/Tools';

const categoryCopy: Record<string, { bn: string; en: string }> = {
  fruit: { bn: 'ফল', en: 'Fruit' },
  vegetable: { bn: 'সবজি', en: 'Vegetables' },
  grain: { bn: 'শস্য', en: 'Grains' },
  legume: { bn: 'ডাল', en: 'Pulses' },
  fish: { bn: 'মাছ', en: 'Fish' },
  'animal-food': { bn: 'ডিম', en: 'Eggs' },
  dairy: { bn: 'দুগ্ধজাত', en: 'Dairy' },
  nuts: { bn: 'বাদাম', en: 'Nuts' },
  spice: { bn: 'মসলা', en: 'Spices' },
  oil: { bn: 'তেল', en: 'Oil' },
  sweetener: { bn: 'মিষ্টিকারক', en: 'Sweeteners' },
  traditional: { bn: 'পরিচিত খাবার', en: 'Local favourites' },
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const en = locale === 'en';
  const featuredFoods = foods.slice(0, 6);
  const categories = Array.from(new Set(foods.map((food) => food.category)));
  const guides = articles.slice(0, 3);

  return (
    <div className="wrap home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">{en ? 'FOOD KNOWLEDGE FOR EVERYDAY LIFE' : 'প্রতিদিনের খাবার, প্রতিদিনের জ্ঞান'}</p>
          <h1 id="home-title">
            {en ? 'Know your food. Make informed choices.' : 'চেনা খাবার, জানুন আরও ভালো করে।'}
          </h1>
          <p className="hero-intro">
            {en
              ? 'Clear, practical food and safety guides made for everyday life in Bangladesh.'
              : 'বাংলাদেশের প্রতিদিনের খাবার, পুষ্টি ও নিরাপত্তা নিয়ে সহজ, ব্যবহারিক তথ্য।'}
          </p>
          <Link className="button hero-cta" href={`/${locale}/foods/`}>
            {en ? 'Explore the food guide' : 'খাবারের পরিচিতি দেখুন'} <span aria-hidden="true">↗</span>
          </Link>
          <p className="hero-note">
            {en ? 'Independent educational resource · No products for sale' : 'স্বাধীন শিক্ষামূলক উদ্যোগ · কোনো পণ্য বিক্রি করা হয় না'}
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-orbit" />
          <Image src="/images/fruit.svg" alt="" width={640} height={360} priority sizes="(max-width: 560px) 76vw, 330px" />
          <span>{en ? 'Everyday foods, thoughtfully explained' : 'প্রতিদিনের খাবার, সহজ ভাষায়'}</span>
        </div>
      </section>

      <section className="search-panel" aria-label={en ? 'Find food and guides' : 'খাবার ও গাইড খুঁজুন'}>
        <div>
          <span className="eyebrow">{en ? 'WHAT ARE YOU LOOKING FOR?' : 'কী জানতে চান?'}</span>
          <h2>{en ? 'Find a food or a guide' : 'খাবার বা বিষয় খুঁজুন'}</h2>
        </div>
        <FoodSearch locale={locale} />
      </section>

      <section className="section browse-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{en ? 'START EXPLORING' : 'খুঁজে দেখুন'}</span>
            <h2>{en ? 'Browse by food type' : 'খাবারের ধরন বেছে নিন'}</h2>
          </div>
          <Link className="text-link" href={`/${locale}/foods/`}>
            {en ? 'All foods' : 'সব খাবার'} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="category-links">
          {categories.map((category) => {
            const label = categoryCopy[category] || { bn: category, en: category };
            const count = foods.filter((food) => food.category === category).length;
            return (
              <Link className="category-link" key={category} href={`/${locale}/foods/?category=${category}`}>
                <span>{en ? label.en : label.bn}</span>
                <span className="category-count">{count} <span aria-hidden="true">↗</span></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section food-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{en ? 'LOCAL FOOD GUIDE' : 'বাংলাদেশের খাবার'}</span>
            <h2>{en ? 'Familiar foods, useful details' : 'চেনা খাবার, দরকারি তথ্য'}</h2>
            <p className="section-intro">
              {en
                ? 'Learn about preparation, storage, allergens and what the available evidence can tell us.'
                : 'প্রস্তুতি, সংরক্ষণ, অ্যালার্জি ও যাচাই করা তথ্য সম্পর্কে জানুন।'}
            </p>
          </div>
          <Link className="text-link" href={`/${locale}/foods/`}>
            {en ? 'Browse all' : 'সব দেখুন'} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="food-grid">
          {featuredFoods.map((food) => (
            <Link className="food-card" key={food.id} href={`/${locale}/foods/${food.slug}/`}>
              <Image src={food.image} alt="" width={640} height={360} loading="lazy" sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, 33vw" />
              <div>
                <span className="tag">{en ? categoryCopy[food.category]?.en || food.category : categoryCopy[food.category]?.bn || food.category}</span>
                <h3>{en ? food.en : food.bn}</h3>
                <p className="small">{en ? food.descriptionEn : food.descriptionBn}</p>
                <span className="card-link">{en ? 'View food guide' : 'খাবারটি জানুন'} <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="evidence-panel">
        <div className="evidence-mark" aria-hidden="true">✓</div>
        <div>
          <span className="eyebrow">{en ? 'HOW WE HANDLE EVIDENCE' : 'তথ্য যাচাইয়ের নীতি'}</span>
          <h2>{en ? 'Numbers only when the match is clear' : 'নির্দিষ্ট মিল পেলেই পুষ্টির সংখ্যা'}</h2>
          <p>
            {en
              ? 'We show nutrient amounts only when the source, food, preparation and serving basis match. Unverified values stay unpublished.'
              : 'উৎস, খাবার, প্রস্তুতি ও পরিবেশনের ভিত্তি মিলে গেলেই পুষ্টির পরিমাণ দেখাই। যাচাই না হওয়া মান প্রকাশ করি না।'}
          </p>
          <Link href={`/${locale}/methodology/`} className="text-link">
            {en ? 'Read our method' : 'তথ্য যাচাইয়ের পদ্ধতি'} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section guides-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{en ? 'READ & LEARN' : 'পড়ুন ও জানুন'}</span>
            <h2>{en ? 'Practical guides for everyday questions' : 'প্রতিদিনের প্রশ্নের সহজ উত্তর'}</h2>
          </div>
          <Link className="text-link" href={`/${locale}/articles/`}>
            {en ? 'All guides' : 'সব লেখা'} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="guide-grid">
          {guides.map((article, index) => (
            <Link className="guide-card" key={article.slug} href={`/${locale}/articles/${article.slug}/`}>
              <span className="guide-number">0{index + 1}</span>
              <h3>{en ? article.en : article.bn}</h3>
              <span className="card-link">{en ? 'Read guide' : 'লেখাটি পড়ুন'} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="tools-banner">
        <div>
          <span className="eyebrow">{en ? 'INTERACTIVE TOOLS' : 'সহজ ইন্টার‌্যাক্টিভ টুল'}</span>
          <h2>{en ? 'Explore, compare and learn' : 'নিজে দেখুন, বুঝে নিন'}</h2>
          <p>
            {en
              ? 'Try the plate builder, label explorer and other browser-based learning tools.'
              : 'প্লেট সাজানো, খাবারের লেবেল পড়া ও অন্যান্য শেখার টুল ব্যবহার করুন।'}
          </p>
        </div>
        <Link className="button" href={`/${locale}/tools/`}>
          {en ? 'Explore tools' : 'টুলগুলো দেখুন'} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
