export default function Modal({ isOpen, onClose, children, className }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 modal_style p-4">
      
      <div className={`bg-white rounded-2xl max-w-full md:max-w-md p-4 md:p-6 relative shadow-xl overflow-visible ${className || ''}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 md:top-5 right-3 md:right-4 text-gray-500 hover:text-black text-lg md:text-xl"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}