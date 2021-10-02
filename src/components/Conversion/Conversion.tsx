import React, { useState } from "react";
import FieldGroup from "./FieldGroup";
import "./styles.css";

// Field Group values
const fields = [
  { label: "Decimal", radix: 10 },
  { label: "Octal", radix: 8 },
  { label: "Hexadecimal", radix: 16 },
  { label: "Binary", radix: 2 },
];

const Conversion: React.FC = () => {
  /**
   * Numerals
   * 0 - Decimal
   * 1 - Octal
   * 2 - Hexadecimal
   * 3 - Binary
   */
  const [numeral, setNumeral] = useState<string[]>(Array(4).fill("0"));

  /**
   * Updates numeral values in state
   * @param value Entered numeral value
   * @param radix Base of value
   */
  const updateValues = (value: string, radix: number): void => {
    const decimal: number = parseInt(value, radix) || 0;
    setNumeral(
      fields.map((field) => decimal.toString(field.radix).toUpperCase())
    );
  };

  return (
    <section className="conversion">
      <div className="field-group-wrapper">
        {fields.map((field, index) => (
          <FieldGroup
            key={index}
            label={field.label}
            radix={field.radix}
            value={numeral[index]}
            handleChange={updateValues}
          />
        ))}
      </div>
    </section>
  );
};

export default Conversion;
