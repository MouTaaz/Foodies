import { getMeal } from "@/lib/meals.js";
import css from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MealsDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={css.header}>
        <div className={css.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={css.headerText}>
          <h1>{meal.title}</h1>
          <p className={css.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={css.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={css.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br>"),
          }}
        ></p>
      </main>
    </>
  );
}
