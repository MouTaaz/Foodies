import css from "@/app/meals/page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Delicius meals, created <span className={css.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={css.cta}>
          <Link href="/meals/share"> Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p className={css.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
