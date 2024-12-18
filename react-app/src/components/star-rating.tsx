import * as Icons from "./icons";

export type RatingProps = {
  ratings: number;
};

const EMPTY = "EMPTY";
const HALF = "HALF";
const FULL = "FULL";

const generateStars = (length: number = 5) =>
  Array.from({ length: length }, (_, index) => index + 1);

const starsIcon = {
  EMPTY: <Icons.StarEmpty />,
  HALF: <Icons.StarHalf />,
  FULL: <Icons.StarFull />,
};

export function Ratings({ ratings = 3.5 }: RatingProps) {
  const stars = generateStars(5).map((starIndex) => {
    if (ratings >= starIndex) return FULL;
    if (ratings >= starIndex - 0.5) return HALF;
    return EMPTY;
  });

  return (
    <div className="flex gap-1 items-center">
      {stars.map((star, index) => (
        <span key={index}>{starsIcon[star]}</span>
      ))}
      <div className="pl-1">
        <span className="text-sm text-gray-300">(2 Reviews)</span>
      </div>
    </div>
  );
}
