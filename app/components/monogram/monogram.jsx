import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 2 27 L 12 2 H 18 L 28 27 H 21.5 L 19 20 H 11 L 8.5 27 Z M 13 14.5 H 17 L 15 8.5 Z M 30 2 H 42 C 45.5 2 48 4.5 48 9 C 48 12.5 46 14.8 43 15.6 L 48.5 27 H 41.5 L 36.8 16.5 H 35.5 V 27 H 30 Z M 35.5 6.5 V 12 H 41 C 42.5 12 43.5 11 43.5 9.25 C 43.5 7.5 42.5 6.5 41 6.5 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
