import React, { useState } from "react";
import {
  HiClipboardCopy as ClipboardStandby,
  HiClipboardCheck as ClipboardSuccess,
} from "react-icons/hi";
import { BiError as ClipboardFailure } from "react-icons/bi";

// defining prop types
interface Props {
  label: string;
  value: string;
  radix: number;
  handleChange: (value: string, radix: number) => void;
}

const FieldGroup: React.FC<Props> = ({ label, value, radix, handleChange }) => {
  // Storing status of clipboard copying
  enum Status {
    Standby, // Haven't copied to clipboard
    Success, // Copied to clipboard successfully
    Failure, // Failed to copy to clipboard
  }
  const [clipboard, setClipboard] = useState<Status>(Status.Standby);
  const StatusIcons = [
    <ClipboardStandby title="Copy to Clipboard" />,
    <ClipboardSuccess title="Copied Successfully" />,
    <ClipboardFailure title="Failed to copy" />,
  ];

  /**
   * Copies numeral string to clipboard
   * @param value Numeral string/value
   */
  const copyToClipboard = (value: string): void => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setClipboard(Status.Success);
      })
      .catch(() => {
        setClipboard(Status.Failure);
      });
  };

  return (
    <div className="field-group">
      <div className="field-group-label">{label}</div>
      <div className="field-group-input-wrapper">
        <input
          className="field-group-input"
          value={value}
          onChange={(event) => {
            setClipboard(Status.Standby);
            handleChange(event.target.value, radix);
          }}
        />
        <div
          className="field-group-clipboard"
          onMouseUp={() => copyToClipboard(value)}
        >
          {StatusIcons[clipboard]}
        </div>
      </div>
    </div>
  );
};

export default FieldGroup;
