import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState,
} from "react";

import s from "./EditableSpan.module.css";
import { FaEdit } from "react-icons/fa";
import { Input } from "../Input/Input";

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type EditableSpanType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
  spanProps?: DefaultSpanPropsType;
};

export const EditableSpan: React.FC<EditableSpanType> = ({
  autoFocus,
  onBlur,
  onEnter,
  spanProps,
  ...restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } =
    spanProps || {};

  const onEnterCallback = () => {
    onEnter && onEnter();
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false);

    onBlur && onBlur(e);
  };
  const onDoubleClickCallBack = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setEditMode(true);

    onDoubleClick && onDoubleClick(e);
  };

  const spanClassName = `${"сделать красивый стиль для спана"} ${className}`;

  return (
    <>
      {editMode ? (
        <Input
          autoFocus
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          {...restProps}
        />
      ) : (
        <span
          onDoubleClick={onDoubleClickCallBack}
          className={spanClassName}
          {...restSpanProps}
        >
          <FaEdit style={{ fontSize: "1.8rem" }} />{" "}
          {children || restProps.value}
        </span>
      )}
    </>
  );
};
