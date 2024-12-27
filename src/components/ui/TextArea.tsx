import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        {...props}
        className="
          block w-full rounded-md border-gray-300 shadow-sm
          focus:border-red-500 focus:ring-red-500 sm:text-sm
          min-h-[100px]
        "
      />
    </div>
  );
}