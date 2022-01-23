import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import cn from "classnames";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  className?: string;
};

export function FormInput({ label, className, ...props }: FormInputProps) {
  const [field, meta] = useField(props);
  const showErrorMessage = meta.touched && meta.error;

  return (
    <div className={cn("sm:rounded-md", className)}>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700 capitalize"
      >
        {label || props.name}
      </label>
      <input
        type="text"
        {...field}
        {...props}
        className={cn(
          "block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-400 focus:border-blue-400",
          showErrorMessage &&
            "focus:ring-red-400 focus:border-red-400 border-red-400"
        )}
      />
      {showErrorMessage && (
        <div className="mt-2 text-sm text-red-400">{meta.error}</div>
      )}
    </div>
  );
}
