type FormFieldProps = {
  label: string;
  name: string;
  register: any;
  error?: any;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

export default function FormField({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-xl p-3 h-32 focus:outline-none focus:border-[#C49A3A]"
        />
      ) : as === "select" ? (
        <select
          {...register(name)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#C49A3A]"
        >
          <option value="">Select an option</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#C49A3A]"
        />
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}