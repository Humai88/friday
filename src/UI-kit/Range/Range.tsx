import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import styles from "./Range.module.css";

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type RangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value: number) => void;
};

export const Range: React.FC<RangePropsType> = ({
  type,
  onChange,
  onChangeRange,
  className,
  value,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeRange && onChangeRange(+e.currentTarget.value);
  };

  const finalRangeClassName = `${styles.slider} ${className ? className : ""}`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sliderTrack}></div>
        <input
          type={"range"}
          className={styles.doubleRange}
          onChange={onChangeCallback}
          {...restProps}
        />
      </div>
    </div>
  );
};
