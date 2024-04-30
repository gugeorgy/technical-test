import React from 'react';

/**
 * `ModalProps` is a type that defines the properties for the Modal component.
 * It has a 'children' property that represents the content of the modal.
 * It has an 'isOpen' property that determines whether the modal is open.
 * It has an 'onClose' property that is a function to close the modal.
 *
 * @typedef {Object} ModalProps
 * @property {React.ReactNode} children - The content of the modal.
 * @property {boolean} isOpen - Whether the modal is open.
 * @property {() => void} onClose - The function to close the modal.
 */
type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

/**
 * `Modal` is a component that displays a modal.
 * The 'children' property is the content of the modal.
 * The 'isOpen' property determines whether the modal is open.
 * The 'onClose' property is a function to close the modal.
 *
 * @param {ModalProps} props - The properties to configure the modal.
 * @returns {JSX.Element | null} The Modal component or null if the modal is not open.
 */
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
      <div className="bg-darkBlue p-4 rounded shadow-lg z-50">
        {children}
      </div>
      <div
        className="fixed inset-0 h-screen bg-darkBlue bg-opacity-90 backdrop-blur-md"
        onClick={onClose}
      ></div>
    </div>
  );
}
