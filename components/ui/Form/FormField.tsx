import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import cn from "classnames";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  className?: string;
};

export function FormField({ label, className, ...props }: FormFieldProps) {
  const [field, meta] = useField(props);

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
          meta.error && "focus:ring-red-400 focus:border-red-400 border-red-400"
        )}
      />
      {meta.error ? (
        <div className="mt-2 text-sm text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
}
